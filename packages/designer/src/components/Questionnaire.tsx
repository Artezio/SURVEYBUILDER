import { TextItem } from "../../../models/src";
import TextItemComponent from "./TextItem";
import React from 'react';
import { connect } from "react-redux";
import { setTitle, setDescription } from "../actions";
import { Dispatch } from "redux";

export class Questionnaire extends React.Component<{ itemList: TextItem[] }> {
    render() {
        const { itemList } = this.props;
        return <div className="questionnaire container">
            <div className="from-group my-3">
                <input className="form-control" type="text" name="title" placeholder="Title" style={{ height: '50px', fontSize: '30px' }} autoFocus={true}></input>
            </div>
            <div className="from-group my-3">
                <textarea className="form-control" rows={3} name="description" placeholder="Description"></textarea>
            </div>
            <div className="item-list">
                {itemList && itemList.map(item => <TextItemComponent key={item.id} item={item} />)}
            </div>
        </div>
    }
}


const mapStateToProps = (state: { questionnaire: { itemList: TextItem[] } }) => {
    return state.questionnaire;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setTitle: (title: string) => {
            dispatch(setTitle(title));
        },
        setDescription: (description: string) => {
            dispatch(setDescription(description));
        }
    }
}








export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);