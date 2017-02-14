package  com.myproj.test;
import android.app.Activity;
import android.content.Intent;
import android.widget.Toast;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

public class ExtendInfo extends CordovaPlugin {
    private static final String TOAST = "toast";
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext)
            throws JSONException {
        Activity activity = this.cordova.getActivity();
        if (action.equals("getExtra")) {
            Intent i = activity.getIntent();
            if (i.hasExtra(Intent.EXTRA_TEXT)) {
                callbackContext.success(i.getStringExtra(Intent.EXTRA_TEXT));
            } else {
                callbackContext.error("");
            }
            return true;
        }else if (action.equals(TOAST)) {

            Toast.makeText(cordova.getActivity(), "hello world", Toast.LENGTH_LONG).show();
        }
        return false;
    }
}