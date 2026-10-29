package world.katseye.fanuniverse;

import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.view.ViewGroup;
import android.webkit.CookieManager;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.ProgressBar;
import android.widget.Toast;
import android.content.Intent;
import android.net.Uri;

import java.util.Locale;
import java.util.regex.Pattern;

public final class MainActivity extends Activity {
    private static final String HOME = "https://voodooman666.github.io/katseye-fan-universe/";
    private static final String SITE_HOST = "voodooman666.github.io";
    private static final Pattern COMMERCE = Pattern.compile("(^|[./?&=_-])(shop|store|ticket|tickets|vip|waitlist|checkout|cart|buy|purchase)([./?&=_-]|$)");
    private WebView webView;

    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        getWindow().setStatusBarColor(Color.rgb(25, 14, 32));
        getWindow().setNavigationBarColor(Color.rgb(25, 14, 32));

        FrameLayout frame = new FrameLayout(this);
        frame.setBackgroundColor(Color.rgb(25, 14, 32));
        webView = new WebView(this);
        webView.setBackgroundColor(Color.rgb(25, 14, 32));
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(false);
        settings.setAllowFileAccess(false);
        settings.setAllowContentAccess(false);
        settings.setSupportMultipleWindows(false);
        settings.setJavaScriptCanOpenWindowsAutomatically(false);
        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        CookieManager.getInstance().setAcceptThirdPartyCookies(webView, false);
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                return route(request.getUrl());
            }

            @SuppressWarnings("deprecation")
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                return route(Uri.parse(url));
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                // The site uses target=_blank for external links. Keep those in this
                // WebView so route() can send approved links out and block commerce.
                view.evaluateJavascript("(function(){const fix=()=>document.querySelectorAll('a[target=\\\"_blank\\\"]').forEach(a=>a.target='_self');fix();new MutationObserver(fix).observe(document.documentElement,{childList:true,subtree:true});})()", null);
            }
        });
        frame.addView(webView, new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));

        ProgressBar loading = new ProgressBar(this);
        FrameLayout.LayoutParams loadingParams = new FrameLayout.LayoutParams(72, 72, android.view.Gravity.CENTER);
        frame.addView(loading, loadingParams);
        webView.setWebChromeClient(new android.webkit.WebChromeClient() {
            @Override
            public void onProgressChanged(WebView view, int progress) {
                loading.setVisibility(progress < 100 ? android.view.View.VISIBLE : android.view.View.GONE);
            }
        });
        setContentView(frame);
        if (state == null) webView.loadUrl(HOME);
        else webView.restoreState(state);
    }

    private boolean route(Uri uri) {
        String scheme = uri.getScheme() == null ? "" : uri.getScheme().toLowerCase(Locale.ROOT);
        String host = uri.getHost() == null ? "" : uri.getHost().toLowerCase(Locale.ROOT);
        String address = uri.toString().toLowerCase(Locale.ROOT);
        if (!"https".equals(scheme) || COMMERCE.matcher(address).find()) {
            Toast.makeText(this, "Shopping and ticket links are disabled.", Toast.LENGTH_SHORT).show();
            return true;
        }
        if (SITE_HOST.equals(host)) {
            if (uri.getPath() != null && uri.getPath().startsWith("/katseye-fan-universe")) return false;
            return true;
        }
        if (isApprovedSocial(host)) {
            try {
                startActivity(new Intent(Intent.ACTION_VIEW, uri));
            } catch (Exception ignored) {
                Toast.makeText(this, "No browser is available to open this link.", Toast.LENGTH_SHORT).show();
            }
        }
        return true;
    }

    private boolean isApprovedSocial(String host) {
        return host.equals("instagram.com") || host.endsWith(".instagram.com")
                || host.equals("youtube.com") || host.endsWith(".youtube.com") || host.equals("youtu.be")
                || host.equals("tiktok.com") || host.endsWith(".tiktok.com")
                || host.equals("x.com") || host.endsWith(".x.com")
                || host.equals("netflix.com") || host.endsWith(".netflix.com")
                || host.equals("katseye.world") || host.endsWith(".katseye.world");
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) webView.goBack();
        else super.onBackPressed();
    }

    @Override
    protected void onSaveInstanceState(Bundle state) {
        if (webView != null) webView.saveState(state);
        super.onSaveInstanceState(state);
    }

    @Override
    protected void onDestroy() {
        if (webView != null) {
            webView.stopLoading();
            webView.destroy();
            webView = null;
        }
        super.onDestroy();
    }
}
