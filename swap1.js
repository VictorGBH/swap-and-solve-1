// Used strict engine to check evaluations
"use strict";


document.addEventListener("DOMContentLoaded", function () {

    const registrationTrigger = document.getElementById("submitSubscriptionBtn");

    // Explicit safety check verification path execution
    if (registrationTrigger) {
        registrationTrigger.addEventListener("click", manageSecureFormValidation);
    }
});

/**
 * Email entry format validation with a custom regex pattern metric
 */
function manageSecureFormValidation() {
    const dataEntryNode = document.getElementById("userAddressInput");

    if (!dataEntryNode) return;

    // Remove external white spaces from extracted string values
    const structuredEmailString = dataEntryNode.value.trim();

    // Custom regular expression string for validation
    const dynamicSyntaxEvaluationModel = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    // Directly validate the regular expression mapping logic
    const criteriaPassed = dynamicSyntaxEvaluationModel.test(structuredEmailString);

    if (criteriaPassed) {
        alert("Your authorization is now complete! Your email address has been successfully added to our mailing list.");
        dataEntryNode.value = ""; // Clear the string content buffer safely
    } else {
        alert("Configuration Error. Your email address format is not recognized.");
    }
}