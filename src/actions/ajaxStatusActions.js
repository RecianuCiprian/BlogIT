import {ajaxConstants} from "./AjaxStatusTypes";

export function beginAjaxCall(){
    return {type:ajaxConstants.BEGIN_AJAX_CALL};
}