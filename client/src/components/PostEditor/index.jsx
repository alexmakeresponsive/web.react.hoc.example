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
        // classNameSuccess: 'success',
        // classNameError:   'error'

    };

    validationMessage1Container = null;
    validationMessage2Container = null;

    getValidationMessage1Ref = (element) => {
        this.validationMessage1Container = element;
    };
    getValidationMessage2Ref = (element) => {
        this.validationMessage2Container = element;
    };

    titleFormPostEditorValidation = (e) => {
        this.setState({
            titleFormPostEditor: {
                value:             e.target.value,
                status: (e.target.value.length < 10) ? false : true
            }
        });

    };
    textFormPostEditorValidation = (e) => {
        this.setState({
            textFormPostEditor: {
                value:             e.target.value,
                status: (e.target.value.length < 20) ? false : true
            }
        });
        // showValidationStatus(validationMessage2Container, this.state.textFormPostEditor.status );
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

    setValidationMessage = ( status ) => {
        switch (status) {
            case true:
                return <span>Success</span>;
                break;
            case false:
                return 'Need more then 10 letters';
                break;
            default:
                return '';
        }
    };

    render = () => {
        return (
            <div className="PostEditor">
                <h1 className="titleComponent">Posteditor</h1>
                <div>
                    <form name="formPostEditor">
                        <fieldset>
                            <legend>Add new post</legend>
                            <div className="inputWr">
                                <label htmlFor="title">Title</label>
                                <textarea id="titleFormPostEditor"
                                          placeholder="title"
                                          value={this.state.titleFormPostEditor.value}
                                          onChange={this.titleFormPostEditorValidation}
                                />
                                <span className={"validationMessage " +
                                                  this.addValidationClassName(this.state.titleFormPostEditor.status )}
                                      ref={this.getValidationMessage1Ref} >
                                    {this.setValidationMessage(this.state.titleFormPostEditor.status)}
                                </span>

                            </div>
                            <div className="inputWr">
                                <label htmlFor="text">Text</label>
                                <textarea id="textFormPostEditor"
                                          placeholder="text"
                                          value={this.state.textFormPostEditor.value}
                                          onChange={this.textFormPostEditorValidation}
                                />
                                <span className={"validationMessage "}
                                      ref={this.getValidationMessage2Ref} />
                            </div>
                            <div>
                                <button type="submit" className="primary-2">
                                    Submit
                                </button>
                            </div>
                        </fieldset>
                    </form>

                </div>
            </div>
        );
    };
};

export default PostEditor;