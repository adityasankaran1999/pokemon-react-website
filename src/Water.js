import React from 'react';
import styled from 'styled-components';
import Modal, { ModalProvider} from 'styled-react-modal';
import './App.css';


const Button = styled.button`
    background-color: #1E90FF;
    color: white;
    padding: 30px 50px;
    outline: 0;
    font-size: 30px;
    font-family: "Tahoma", Geneva, sans-serif;
    width: 200px;
`

const WaterModal = Modal.styled`
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

export default class Water extends React.Component {

    state = { showModal: false }

    waterClick = () => this.setState({ showModal: !this.state.showModal })

    componentDidMount = () => document.title = "Pokemon Type Matchups"

    render() {
        return (
            <ModalProvider>
            <div>
                
                <Button onClick={this.waterClick}>Water</Button>
                <WaterModal
                    isOpen={this.state.showModal}>
                        
                        <Type>Water is super-effective against Fire, Ground, and Rock.{"\n"}
                        Water is not very effective against Grass, Water, and Dragon.{"\n"}
                        Water is normally effective against all other types.{"\n"}
                        <CloseButton onClick={this.waterClick}>Close</CloseButton></Type>
                    
                </WaterModal>
            </div>
            </ModalProvider>
        )
    }

}