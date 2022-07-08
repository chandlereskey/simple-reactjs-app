import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Panel from 'react-bootstrap/lib/Panel'
import './Calculator.css'

const Calculator = () => {

    const [answer, setAnswer] = React.useState('')
    const [val1, setVal1] = React.useState('')
    const [val2, setVal2] = React.useState('')
    const [operator, setOperator] = React.useState('')
    const [first, setFirst] = React.useState(true)
    const [flipper, setFilipper] = React.useState(false)

    useEffect(() => {
        console.log('val1: ', val1, 'operator: ', operator, 'val2: ', val2, 'answer: ', answer)
    }, [flipper])

    const reset = () => {
        setVal1('')
        setVal2('')
        setOperator('')
        setAnswer('')
        setFirst(true)
    }

    const equals = () => {
        const val1Num = parseFloat(val1)
        const val2Num = parseFloat(val2)
        switch (operator) {
            case '/':
                setAnswer(val1Num / val2Num)
                break
            case '*':
                setAnswer(val1Num * val2Num)
                break
            case '+':
                setAnswer(val1Num + val2Num)
                break
            case '-':
                setAnswer(val1Num - val2Num)
                break
            default:
                break
        }
        setFilipper(!flipper)
    }

    const clicked = (passedVal) => {
        switch (passedVal){
            case 'AC':
                reset()
                break
            case '?':
                if (val2 !== '') {
                   setVal2(val2 * -1)
                } else if (val1 !== '') {
                    setVal1(val1 * -1)
                }
                break
            case '%':
                if (answer) {
                    setAnswer(answer / 100)
                }
                else if (val2 !== '') {
                    setVal2(val2 / 100)
                } else if (val1 !== ''){
                    setVal1(val1 / 100)
                }
                break
            case '/':
                if (val1 !== '') {
                    setOperator('/')
                    setFirst(false)
                } 
                break
            case 'x':
                if (val1 !== '') {
                    setOperator('*')
                    setFirst(false)
                }
                break
            case '-':
                if (val1 !== '') {
                    setOperator('-')
                    setFirst(false)
                }
                break
            case '+':
                if (val1 !== '') {
                    setOperator('+')
                    setFirst(false)
                }
                break
            case '0':
                if (first) {
                    setVal1(val1 + '0')
                } else {
                    setVal2(val2 + '0')
                }
                break
            case '1':
                if (first) {
                    setVal1(val1 + '1')
                } else {
                    setVal2(val2 + '1')
                }
                break
            case '2':
                if (first) {
                    setVal1(val1 + '2')
                } else {
                    setVal2(val2 + '2')
                }
                break
            case '3':
                if (first) {
                    setVal1(val1 + '3')
                } else {
                    setVal2(val2 + '3')
                }
                break
            case '4':
                if (first) {
                    setVal1(val1 + '4')
                } else {
                    setVal2(val2 + '4')
                }
                break
            case '5':
                if (first) {
                    setVal1(val1 + '5')
                } else {
                    setVal2(val2 + '5')
                }
                break
            case '6':
                if (first) {
                    setVal1(val1 + '6')
                } else {
                    setVal2(val2 + '6')
                }
                break
            case '7':
                if (first) {
                    setVal1(val1 + '7')
                } else {
                    setVal2(val2 + '7')
                }
                break
            case '8':
                if (first) {
                    setVal1(val1 + '8')
                } else {
                    setVal2(val2 + '8')
                }
                break
            case '9':
                if (first) {
                    setVal1(val1 + '9')
                } else {
                    setVal2(val2 + '9')
                }
                break
            default: 
                break
            

        }
    }

    const buttonClickUpdate = (valuePassed) => {
        clicked(valuePassed)
        setFilipper(!flipper)
    }
    
    return (
        <div className='Calc' style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass='h3'>{answer ? answer : `${val1} ${operator} ${val2}`}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <table>
                        <tr>
                            <th>
                                <Button onClick={() => buttonClickUpdate('AC')}>AC</Button>
                            </th>
                            <th>
                                <Button onClick={() => buttonClickUpdate('?')}>-/+</Button>
                            </th>
                            <th>
                                <Button onClick={() => buttonClickUpdate('%')}>%</Button>
                            </th>
                            <th>
                                <Button onClick={() => buttonClickUpdate('/')}>/</Button>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <Button onClick={() => buttonClickUpdate('7')}>7</Button>
                            </th>
                            <th>
                                <Button onClick={() => buttonClickUpdate('8')}>8</Button>
                            </th>
                            <th>
                                <Button onClick={() => buttonClickUpdate('9')}>9</Button>
                            </th>
                            <th>
                                <Button onClick={() => buttonClickUpdate('x')}>x</Button>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <Button onClick={() => buttonClickUpdate('4')}>4</Button>
                            </th>
                            <th>
                                <Button onClick={() => buttonClickUpdate('5')}>5</Button>
                            </th>
                            <th>
                                <Button onClick={() => buttonClickUpdate('6')}>6</Button>
                            </th>
                            <th>
                                <Button onClick={() => buttonClickUpdate('-')}>-</Button>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <Button onClick={() => buttonClickUpdate('1')}>1</Button>
                            </th>
                            <th>
                                <Button onClick={() => buttonClickUpdate('2')}>2</Button>
                            </th>
                            <th>
                                <Button onClick={() => buttonClickUpdate('3')}>3</Button>
                            </th>
                            <th>
                                <Button onClick={() => buttonClickUpdate('+')}>+</Button>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                
                            </th>
                            <th>
                                <Button onClick={() => buttonClickUpdate('0')}>0</Button>
                            </th>
                            <th>
                                
                            </th>
                            <th>
                                <Button onClick={() => equals()}>=</Button>
                            </th>
                        </tr>
                    </table>
                </Panel.Body>
            </Panel>
        </div>
    );
  }

export default Calculator;
