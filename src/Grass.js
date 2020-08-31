import React from 'react';
import styled from 'styled-components';
import Modal, { ModalProvider} from 'styled-react-modal';


const Button = styled.button`
    background-color: #228B22;
    color: white;
    padding: 30px 50px;
    outline: 0;
    font-size: 30px;
    font-family: "Tahoma", Geneva, sans-serif;
    width: 200px;
`

const GrassModal = Modal.styled`
    width: 60rem;
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
    left: 450px;
    bottom: 0;

`

export default class Grass extends React.Component {

    state = { showModal: false }

    grassClick = () => this.setState({ showModal: !this.state.showModal })

    render() {
        return (
            <ModalProvider>
            <div>
                
                <Button onClick={this.grassClick}>Grass</Button>
                <GrassModal
                    isOpen={this.state.showModal}>
                        <Type>Grass is super-effective against Water, Ground, and Rock.{"\n"}
                        Grass is not very effective against Fire, Poison, Grass, Flying, Bug, Dragon, and Steel.{"\n"}
                        Grass is normally effective against all other types.</Type>
                    <CloseButton onClick={this.grassClick}>Close</CloseButton>
                </GrassModal>
            </div>
            </ModalProvider>
        )
    }

}