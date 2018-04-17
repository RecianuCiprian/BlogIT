import {ajaxConstants} from "./ajaxStatusTypes";

export function beginAjaxCall(){
    return {type:ajaxConstants.BEGIN_AJAX_CALL}
}