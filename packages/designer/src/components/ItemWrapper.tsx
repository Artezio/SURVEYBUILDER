import * as React from 'react';
import * as Models from '@art-forms/models';
import ItemWrapperProps from '../interfaces/components/ItemWrapperProps';
import { useObservableModel } from '@art-forms/observable';
import ItemProvider from './ItemProvider';
import ItemCollectionMenu from './ItemCollectionMenu';
import { FormApi, Form, Text } from 'informed';
import QuestionTypeMenu from './QuestionTypeMenu';



export class ItemWrapper extends React.Component<ItemWrapperProps> {
    formApi?: FormApi<Omit<Models.IItem, 'type'>>;
    // formApi_2?: FormApi<Omit<Models.IQuestionItem<any>, 'type'>>;
    factory: Models.ItemFactory = new Models.ItemFactory(this.props.item.parent);
    inputRef: React.RefObject<HTMLInputElement> = React.createRef();

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }
    // submitForm_2() {
    //     if (!this.formApi_2) return;
    //     this.formApi_2.submitForm();
    // }

    getFormApi(formApi: FormApi<Omit<Models.IItem, 'type'>>) {
        this.formApi = formApi;
    }
    // getFormApi_2(formApi: FormApi<Omit<Models.IQuestionItem<any>, 'type'>>) {
    //     this.formApi_2 = formApi;
    // }

    handleSubmit(values: Partial<Omit<Models.IItem, 'type'>>) {
        const { item } = this.props;
        item.updateItem({ ...item, text: values.text });
    }
    // handleSubmit_2(values: Partial<Omit<Models.IQuestionItem<any>, 'type'>>) {
    //     const { item } = this.props;
    //     item.updateItem({ ...item, ...values });
    // }

    componentDidMount() {
        if (this.inputRef.current) {
            const x = window.pageXOffset;
            const y = window.pageYOffset;
            this.inputRef.current.focus();
            window.scrollTo(x, y)
        }
    }

    componentDidUpdate() {
        const { item } = this.props;
        this.formApi && this.formApi.setValues(item);
        // this.formApi_2 && this.formApi_2.setValues(item as Models.QuestionItem<any>);
    }

    renderHeader() {
        const { item } = this.props;
        return <div className="row">
            <div className="col-4"></div>
            <div className="col-4 d-flex justify-content-center">
                <i className="btn half-opacity fas fa-grip-horizontal"></i>
            </div>
            <div className="col-4 d-flex justify-content-end">
                {item.type === Models.GROUP && < ItemCollectionMenu title="Context menu" item={item as Models.GroupItem} />}
            </div>
        </div>
    }

    renderItemHeadLine() {
        const { item } = this.props;
        if (item.type !== Models.GROUP && item.type !== Models.DISPLAY) {
            return <div className="form-row headline">
                <div className="col-md-8">
                    <Form getApi={this.getFormApi.bind(this)} key={item.id} initialValues={item} onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-group">
                            <label htmlFor={`${item.id}-text`}>Question</label>
                            <Text forwardedRef={this.inputRef} autoComplete="off" className="form-control" id={`${item.id}-text`} field="text" placeholder="My Question" onBlur={this.submitForm.bind(this)} />
                        </div>
                    </Form>
                </div>
                <div className="col-md-4">
                    <QuestionTypeMenu title="Question Type" item={item} />
                </div>
            </div>
        }
    }

    renderFooter() {
        const { item } = this.props;
        return <div className="d-flex align-items-center">
            {item.type !== Models.GROUP && item.type !== Models.DISPLAY && <div>
                {/* <Form getApi={this.getFormApi_2.bind(this)} key={item.id} initialValues={(item as Models.QuestionItem<any>)} onSubmit={this.handleSubmit_2.bind(this)}> */}
                <div className="custom-control">
                    <input name="required" type="checkbox" className="custom-control-input" id={`${item.id}-required`} /*onChange={this.submitForm_2.bind(this)}*/ />
                    <label className="custom-control-label" htmlFor={`${item.id}-required`}>Required</label>
                </div>
                {/* <div className="custom-control">
                        <Checkbox field="repeats" type="checkbox" className="custom-control-input" id={`${item.id}-repeats`} onChange={this.submitForm_2.bind(this)} />
                        <label className="custom-control-label" htmlFor={`${item.id}-repeats`}>Repeats</label>
                    </div> */}
                {/* </Form> */}
            </div>}
            <button className="btn btn-outline-secondary ml-auto" onClick={item.remove.bind(item)}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    }

    onDragStart(e: React.DragEvent) {
        // const ball = e.currentTarget.cloneNode(true) as HTMLElement;
        // const oldStyle = getComputedStyle(e.currentTarget) as any;
        // ball.setAttribute('style', `height: ${oldStyle.height}; width: ${oldStyle.width}; zIndex: 1000; opacity: 0.8`)
        // document.body.appendChild(ball);
        // ball.style.position = "absolute";
        // const coords = getCoords(ball);
        // const shiftX = e.pageX - coords.left;
        // const shiftY = e.pageY - coords.top;
        // function moveAt(e: any) {
        //     ball.style.left = e.pageX - oldStyle.width / 2 + 'px';
        //     ball.style.top = e.pageY + 'px';
        // }
        // function getCoords(elem: HTMLElement) {   // кроме IE8-
        //     var box = elem.getBoundingClientRect();
        //     console.log(box)
        //     return {
        //         top: box.top + pageYOffset,
        //         left: box.left + pageXOffset
        //     };
        // }
        // moveAt(e);
        // document.addEventListener('mousemove', function (e) {
        //     console.log(e)
        //     moveAt(e);
        // })
    }

    render() {
        const { item, nestingLevel, className = '', subscribe } = this.props;
        return <div className={`questionnaire-item card card-sm mb-3 ${className}`} data-id={item.id} onDragStart={this.onDragStart.bind(this)}>
            <div className="card-header drag-handle">
                {this.renderHeader()}
            </div>
            <div className="card-body">
                {this.renderItemHeadLine()}
                <ItemProvider item={item} key={item.id} nestingLevel={nestingLevel} subscribe={subscribe} />
            </div>
            <div className="card-footer">
                {this.renderFooter()}
            </div>
        </div>
    }
}

export default useObservableModel<ItemWrapperProps>(ItemWrapper);