import React from 'react';
import Modal, { ModalProvider} from 'styled-react-modal';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #8B4513;
    color: white;
    padding: 30px 50px;
    outline: 0;
    font-size: 30px;
    font-family: "Tahoma", Geneva, sans-serif;
    width: 200px;
`

const DarkModal = Modal.styled`
    width: 50rem;
    height: 25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    white-space: pre-line;
    position: relative;
    
`

const Type = styled.p`
    font-size: 20px;
    font-family: "Tahoma", Geneva, sans-serif;
    text-align: left;
    white-space: pre-line;

`

const CloseButton = styled.button`
    font-size: 15px;
    font-family: "Tahoma", Geneva, sans-serif;
    padding: 5px 5px;
    align-items: center;
    position: absolute;
    left: 375px;
    bottom: 0;

`

export default class Dark extends React.Component {

    state = { showModal: false }

    darkClick = () => this.setState({ showModal: !this.state.showModal })

    render() {
        return (
            <ModalProvider>
            <div>
                
                <Button onClick={this.darkClick}>Dark</Button>
                <DarkModal
                    isOpen={this.state.showModal}>
                        <Type>Dark is super-effective against Psychic and Ghost.{"\n"}
                        Dark is not very effective against Fighting, Dark, and Fairy.{"\n"}                                    
                        Dark is normally effective against all other types.</Type>
                    <CloseButton onClick={this.darkClick}>Close</CloseButton>
                </DarkModal>
            </div>
            </ModalProvider>
        )
    }

}
