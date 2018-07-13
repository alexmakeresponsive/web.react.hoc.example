import React, { Component } from 'react';
import './index.styl';


class PostEditor extends Component {
    state = {
        titleFormPostEditor: {
            value: '',
            status: null
        },
        textFormPostEditor: {
            value: '',
            status: null
        },

        submitIsActive: {
            status: null
        }
    };

    consts = {
        titleAttributesName: 'titleFormPostEditor',
        textAttributesName:  'textFormPostEditor'
    };

    FormPostEditorValidation = (e) => {
        let dataStateName = e.target.attributes['data-state-name'].value;
        let textLength = (dataStateName === 'titleFormPostEditor') ? 10 : 20;

        this.setState({
            [dataStateName]: {
                value:   e.target.value,
                status: (e.target.value.length < textLength) ? false : true
            }
        });


        // console.log('FormPostEditorValidation start');
        //&& this.state.textFormPostEditor.status
        if (this.state.titleFormPostEditor.status) {
            console.log('enable button');
            //button disable
            this.setState({
                submitIsActive: {
                    status: true
                }
            });
        }
    };

    addValidationClassName = ( status ) => {
        switch (status) {
            case true:
                return 'success';
                break;
            case false:
                return 'error';
                break;
            default:
                return '';
        }
    };

    addActiveClassName = (status) => {
        if (status) {
            return 'active';
        }

        return 'disabled';
    };

    setValidationMessage = ( status, name ) => {
        switch (status) {
            case true:
                return <span>Success</span>;
                break;
            case false:
                switch (name) {
                    case 'titleFormPostEditor':
                        // console.log('name title ? = ', name);
                        return 'Need more then 10 letters';
                        break;
                    case 'textFormPostEditor':
                        // console.log('name text ? = ', name);
                        return 'Need more then 20 letters';
                        break;
                    default:
                        return 'Text not corrected';
                }
                break;
            default:
                return '';
        }
    };

    render = () => {
        let stateTitle = this.state.titleFormPostEditor;
        let stateText  = this.state.textFormPostEditor;
        let stateSubmit  = this.state.submitIsActive;

        let titleName = this.consts.titleAttributesName;
        let textName = this.consts.textAttributesName;

        // console.log(this.state.titleFormPostEditor.status);
        // console.log(this.state);

        return (
            <div className="PostEditor">
                <h1 className="titleComponent">Posteditor</h1>
                <div>
                    <form name="formPostEditor">
                        <fieldset>
                            <legend>Add new post</legend>
                            <div className="inputWr">
                                <label htmlFor="title">Title</label>
                                <textarea id={titleName}
                                          placeholder="title"
                                          data-state-name={titleName}
                                          value={stateTitle.value}
                                          onChange={this.FormPostEditorValidation}
                                />
                                <span className={"validationMessage " +
                                                  this.addValidationClassName(stateTitle.status )} >
                                    {this.setValidationMessage(stateTitle.status, titleName)}
                                </span>

                            </div>
                            <div className="inputWr">
                                <label htmlFor="text">Text</label>
                                <textarea id={textName}
                                          placeholder="text"
                                          data-state-name={textName}
                                          value={stateText.value}
                                          onChange={this.FormPostEditorValidation}
                                />
                                <span className={"validationMessage " +
                                                  this.addValidationClassName(stateText.status )}>
                                    {this.setValidationMessage(stateText.status, textName)}
                                </span>
                            </div>
                            <div>

                            </div>
                            <button type="submit"
                                    className={"primary-2 " +
                                    this.addActiveClassName(stateSubmit.status)}>
                                Submit
                            </button>
                        </fieldset>
                    </form>

                </div>
            </div>
        );
    };
};

export default PostEditor;