import React from 'react';
import styled from 'styled-components';
import Modal, { ModalProvider} from 'styled-react-modal';


const Button = styled.button`
    background-color: #BDB76B;
    color: white;
    padding: 30px 50px;
    outline: 0;
    font-size: 30px;
    font-family: "Tahoma", Geneva, sans-serif;
    width: 200px;
`

const RockModal = Modal.styled`
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

export default class Rock extends React.Component {

    state = { showModal: false }

    rockClick = () => this.setState({ showModal: !this.state.showModal })

    render() {
        return (
            <ModalProvider>
            <div>
                
                <Button onClick={this.rockClick}>Rock</Button>
                <RockModal
                    isOpen={this.state.showModal}>
                        <Type>Rock is super-effective against Fire, Ice, Flying, and Bug.{"\n"}
                        Rock is not very effective against Fighting, Ground, and Steel.{"\n"}                   
                        Rock is normally effective against all other types.</Type>
                    <CloseButton onClick={this.rockClick}>Close</CloseButton>
                </RockModal>
            </div>
            </ModalProvider>
        )
    }

}
