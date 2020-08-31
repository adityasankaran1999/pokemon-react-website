import React from 'react';
import Modal, { ModalProvider} from 'styled-react-modal';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #FF00FF;
    color: white;
    padding: 30px 50px;
    outline: 0;
    font-size: 30px;
    font-family: "Tahoma", Geneva, sans-serif;
    width: 200px;
`

const PsychicModal = Modal.styled`
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

export default class Psychic extends React.Component {

    state = { showModal: false }

    psychicClick = () => this.setState({ showModal: !this.state.showModal })

    render() {
        return (
            <ModalProvider>
            <div>
                
                <Button onClick={this.psychicClick}>Psychic</Button>
                <PsychicModal
                    isOpen={this.state.showModal}>
                        <Type>Psychic is super-effective against Fighting and Poison.{"\n"}
                        Psychic is not very effective against Psychic and Steel.{"\n"}
                        Psychic has no effect against Dark.{"\n"}                                      
                        Psychic is normally effective against all other types.</Type>
                    <CloseButton onClick={this.psychicClick}>Close</CloseButton>
                </PsychicModal>
            </div>
            </ModalProvider>
        )
    }

}