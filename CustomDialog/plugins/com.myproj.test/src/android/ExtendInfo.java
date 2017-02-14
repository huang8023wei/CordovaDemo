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