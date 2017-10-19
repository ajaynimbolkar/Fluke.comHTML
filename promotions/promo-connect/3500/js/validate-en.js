/* This file contains functions used for inline dynamic form field validation*/


function ValidateRequiredField(Element, args) { //Check if Element args are null or blank - used to validate Required Fields
    var elementVal = Element.value;
    var testPass = true;
    if (Element) {
        if (args.Type == 'text') {
            if (Element.value == null || Element.value == "") {
                return false;
            }
        } else if (args.Type == 'checkbox') {
            if (!Element.checked) {
                return false;
            }
        } else if (args.Type == 'singlesel') {
            if (Element.value == null || Element.value == "" || Element.value == "base") {
                return false;
            }
        } else if (args.Type == 'multisel') {
            var selCount = 0;
            for (var i = 0; i < Element.length; i++) {
                if (Element[i].selected && Element[i].value != '') {
                    selCount += 1;
                }
            }
            if (selCount == 0)
                return false;
        }
    } else
        testPass = false;
    return testPass;
}


function ValidateEmailAddress(Element) { // Check if Element value fits the RegEx expression for an email address
    var varRegExp = '^[A-Z0-9!#\\$%&\'\\*\\+\\-/=\\?\\^_`\\{\\|\\}~][A-Z0-9!#\\$%&\'\\*\\+\\-/=\\?\\^_`\\{\\|\\}~\\.]{0,62}@([A-Z0-9](?:[A-Z0-9\\-]{0,61}[A-Z0-9])?(\\.[A-Z0-9](?:[A-Z0-9\\-]{0,61}[A-Z0-9])?)+)$';
    if ((Element) && (Element.value != '')) {
        var reg = new RegExp(varRegExp, "i");
        var match = reg.exec(Element.value.trim());
        if ((match) && (match.length = 3) && (match[1].length <= 255) && ((match[2].length >= 3) & (match[2].length <= 7)))
            return true;
    }
    return false;
}


//---------------------------------------------------------
function InputCheck(elem) { // Checks values in an Input field - separated from jQuery main body to facilitate bool return values
    if (elem.attr("name") != "address2") { // address2 is not a required field, therefore no checks need to be performed
        if (elem.attr("name") == "emailAddress") { // Check if Email Validation is needed
            if (!ValidateEmailAddress(elem[0])) { // If not valid



                elem.parent().addClass("has-error").removeClass("has-success");
                elem.siblings(".help-block").show();


                return false; // Return False used in CheckForm
            } else { //else if valid


                elem.parent().addClass("has-success").removeClass("has-error");
                elem.siblings(".help-block").hide();


                return true; // Return True used in CheckForm
            }
        } else if (elem.attr("name") == "emailAddress2") { // Check if Email Confirmation is needed

            if (elem.attr("value") != $('[name="emailAddress"]').attr("value")) { // If not equal to first email address submission

                elem.parent().addClass("has-error").removeClass("has-success");
                elem.siblings(".help-block").show();

                return false; // Return False used in CheckForm

            } else { //else if valid



                elem.parent().addClass("has-success").removeClass("has-error");
                elem.siblings(".help-block").hide();



                return true; // Return True used in CheckForm

            }

        } else { //If not checking for email in an Input field, just check for text
            var args = {
                'Type': 'text'
            };

            if (!ValidateRequiredField(elem[0], args)) { // If not valid


                elem.parent().addClass("has-error").removeClass("has-success");
                elem.siblings(".help-block").show();

                return false; // Return False used in CheckForm
            } else { // Else if Vaild


                elem.parent().addClass("has-success").removeClass("has-error");
                elem.siblings(".help-block").hide();


                return true; // Return True used in CheckForm
            }

        }

    } else { // Else case for fields not required
        return true; // Return True used in CheckForm
    }
};

function SelectCheck(elem) { // Checks values in a Select field - separated from jQuery main body to facilitate bool return values

    var args = {
        'Type': 'singlesel'
    }; // Validates for single select dropdowns
    if (!ValidateRequiredField(elem[0], args)) {


        elem.parent().addClass("has-error").removeClass("has-success");
        elem.siblings(".help-block").show();

        return false; // Return False used in CheckForm
    } else { // Else if Valid


        elem.parent().addClass("has-success").removeClass("has-error");
        elem.siblings(".help-block").hide();


        return true; // Return True used in CheckForm
    }


};


function CheckboxCheck(elem) { // Checks values in a Select field - separated from jQuery main body to facilitate bool return values

    var args = {
        'Type': 'checkbox'
    }; // Validates for single select dropdowns
    if (!ValidateRequiredField(elem[0], args)) {


        elem.parent().addClass("has-error").removeClass("has-success");
        elem.siblings(".help-block").show();

        return false; // Return False used in CheckForm
    } else { // Else if Valid


        elem.parent().addClass("has-success").removeClass("has-error");
        elem.siblings(".help-block").hide();


        return true; // Return True used in CheckForm
    }


};


function RadioCheck(elem) {

    var name = elem.attr("name");
    if ($("input:radio[name=" + name + "]:checked").length == 0) { // If there's no radio option selected

        elem.parent().next().next().children().replaceWith('<img style="float: right" src="http://assets.fluke.com/eloqua/scripts/img/Denied.png" />');

        return false; // Return False used in CheckForm
    } else { // Else if Valid

        elem.parent().next().next().children().replaceWith('<img style="float: right" src="http://assets.fluke.com/eloqua/scripts/img/OK.png" />');


        return true; // Return True used in CheckForm
    }

};

$(document).ready(function() { // jQuery requirement to make sure the DOM is ready for event bindings



    $('input.elqField:text').blur(function() {
        InputCheck($(this));
    }); // Run InputCheck onBlur for Input Fields with class elqField

    $('select.elqField').blur(function() {
        SelectCheck($(this));
    }); // Run SelectCheck onBlur for Select Fields with class elqField



});


function CheckForm() { // Used to check all fields
    var Valid = true; // Validation flag
    $('input.elqField:text').each(function() { // For every input field with class elqField, manually run InputCheck and flip flag if any return false
        $(this).val($(this).val().trim());
        if (!InputCheck($(this))) {
            Valid = false;

        }
    });

    $('input.elqField:checkbox').each(function() { // For every input field with class elqField, manually run InputCheck and flip flag if any return false
        if (!CheckboxCheck($(this))) {
            Valid = false;

        }
    });

    $('select.elqField').each(function() { // For every select field with class elqField, manually run InputCheck and flip flag if any return false

        if (!SelectCheck($(this))) {
            Valid = false;
        }
    });

    $("input.elqRadio:radio").each(function() {


        if (!RadioCheck($(this))) {
            Valid = false;
        }
    });


    return Valid;
}

function submitForm(elqForm) { //When Form submits, run through validation check and cleanup phase

    if (CheckForm()) { // If the Vaildation check comes back clean
        prepareSelectsForEloqua(elqForm); // Run data cleanup for Eloqua - governed by elqForm.js
        fnPrepareCheckboxMatricesForEloqua(elqForm);
        return true;
    } else {
        return false;
    }
}