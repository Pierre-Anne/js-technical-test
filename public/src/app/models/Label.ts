'use strict';
/**
 * Label class is used for the whole Issue information
 */
class Label {

    public url: string;
    public name: string;
    public color: string;

    /**
     * Initialize the Label information with the data of the WS response
     * @param {} The WS response
     */
    public initLabelFromWSResponse(label: IResponseLabel) {
        this.url = label.url;
        this.name = label.name;
        this.color = label.color;
    }
}
