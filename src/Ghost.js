import React from 'react';
import styled from 'styled-components';
import Modal, { ModalProvider} from 'styled-react-modal';


const Button = styled.button`
    background-color: #663399;
    color: white;
    padding: 30px 50px;
    outline: 0;
    font-size: 30px;
    font-family: "Tahoma", Geneva, sans-serif;
    width: 200px;
`

const GhostModal = Modal.styled`
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

export default class Ghost extends React.Component {

    state = { showModal: false }

    ghostClick = () => this.setState({ showModal: !this.state.showModal })

    render() {
        return (
            <ModalProvider>
            <div>
                
                <Button onClick={this.ghostClick}>Ghost</Button>
                <GhostModal
                    isOpen={this.state.showModal}>
                        <Type>Ghost is super-effective against Ghost and Psychic.{"\n"}
                        Ghost is not very effective against Dark.{"\n"}
                        Ghost has no effect against Normal.{"\n"}                                      
                        Ghost is normally effective against all other types.</Type>
                    <CloseButton onClick={this.ghostClick}>Close</CloseButton>
                </GhostModal>
            </div>
            </ModalProvider>
        )
    }

}
