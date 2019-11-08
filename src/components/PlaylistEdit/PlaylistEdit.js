import React, {useState} from 'raect';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

let url = `${APIURL}/scorestacc/playlist`;

const PlaylistEdit = () => {
    const [editName, setEditName] = useStte(props.scoreToUpdate.name);

    const PlaylistUpdate = (event, score) => {
        event.preventDefault();
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({log: {name: editName}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => {
            props.fetchScores();
            props.updateOff();
        })
    }
    return(
        <Modal isOpen={true}>
            <ModalHeader>Update PLaylist</ModalHeader>
            <ModalBody>
                <Form onSubmit={PlaylistUpdate}>
                    <FormGroup>
                        <Label htmlFor="result">Edit Name:</Label>
                        <input name='result' value={editName} onChange={(e) => setEditName(e.target.value)}/>
                    </FormGroup>
                    <Button type="submit">Update</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default PlaylistEdit;