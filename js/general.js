document.addEventListener( 'DOMContentLoaded', function() {
    window.onload = function() {
        uncheck('menu-btn');
    };
    function uncheck(id) {
        document.getElementById(id).checked = false;
    }

    //Email Replace
    function setAttributes(elem, attrs) {
        for(var key in attrs) {
          elem.setAttribute(key, attrs[key]);
        }
    }
  
    const emails = document.querySelectorAll('.email-replace');
    emails.forEach(entry => {
        setAttributes(entry, {"href": "mailto:nancypannikkat" + "@" + "gmail.com?subject=Art Purchase Inquiry", "target": "_blank"});
        entry.innerHTML = "nancypannikkat" + "@" + "gmail.com";
    });
});