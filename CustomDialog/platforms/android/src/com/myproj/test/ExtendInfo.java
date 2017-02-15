package com.myproj.test;

import android.app.Activity;
import android.widget.Toast;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

public class ExtendInfo extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext)
            throws JSONException {
        Activity activity = this.cordova.getActivity();
        if (action.equals("toast")) {
            android.widget.Toast.makeText(cordova.getActivity(), "Hello World!!!", Toast.LENGTH_SHORT).show();
        }
        return false;
    }
}