import { extend, localize } from "vee-validate";
import { min, required, email,between, confirmed,numeric, alpha,max} from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en.json";

// Install rules
extend("required", {...required,message:"This field is required"});
extend("min", {...min,message:'Please enter must be at least 8 characters'});
extend("otp", {...min,message:'Please enter must be at least 5 characters'});
extend("email",{ ...email,message:'Please enter vaild E-mail'});
extend('between',between)
extend("confirmed",{...confirmed,message:'Password Does not matched'})
// extend("confirmed", email);
extend("alpha",{...alpha,message:"Please enter only alphabet"})
extend("numeric",{...numeric,message:"Please enter numerical Value"})
extend("max",max)
// Install messages
localize({
  en
});
