(function(ctx){
    /*
        Validates whether or not the value length is greather than zero after
        removing whitespace from both ends of the string. 
        @param value String to verify its length
        @return true if it has a length greater than zero; otherwise, false.
    */
    ctx.text = ctx.text || (function(value){
        if(Object.prototype.toString.call(value) === '[object String]')
            return value.trim().length > 0;
        return false;
    });
    /*
        Validates whether or not the value matches the regular expression
        for an email
        @param value String the to search for a match
        @return true if there is match between the email regex and the specific string; otherwise, false. 
    */
    ctx.email = ctx.email || (function(value){
        if(Object.prototype.toString.call(value) === '[object String]')
            return /[^@\s]+@(?:[-a-z0-9]+\.)+[a-z]{2,}$/.test(value);
        return false;
    });
})(define('dmproadmap.utils.validate'));