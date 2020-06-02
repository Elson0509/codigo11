import React, {useState, memo} from 'react';
import {IntegerNumberBrazilian, IntegerAreaBrazilian, percentNumberBrazilian, equivalenciaCamposFutebol, sizeCampoFutebol} from '../../util/Utilities'
import { Fragment } from 'react';
import Icon from '../Icon/Icon'
import {Popover, PopoverHeader, PopoverBody} from 'reactstrap';

const AtvFisConsTable = (props) => {
    let totalArea = 0;
    let totalRec = 0;

    const [popoverOpen, setPopoverOpen] = useState(false)

    const toggle = () => {
        setPopoverOpen( prevState => !prevState)
    }
    const [popoverOpen2, setPopoverOpen2] = useState(false)

    const toggle2 = () => {
        setPopoverOpen2( prevState => !prevState)
    }

    return (
        <table className="table table-hover table-sm table-striped over">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Quantidade</th>
                    <th scope="col">Area</th>
                    <th scope="col">% Receita FII</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.ativos.length > 0 && (
                        <Fragment>
                            {props.ativos.map((atv, ind) => {
                                totalArea+=atv.area
                                totalRec+=atv.porc_rec_fii
                                return (
                                    <tr key={`atvFisCons${ind}`}>
                                        <th scope="row">{ind+1}</th>
                                        <td>{atv.tipo}</td>
                                        <td>{IntegerNumberBrazilian(atv.qtd)}</td>
                                        <td>{IntegerAreaBrazilian(atv.area)}</td>
                                        <td>{percentNumberBrazilian(atv.porc_rec_fii, 2)}</td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <th scope="row" colSpan="3">Total</th>
                                <td><Icon icon="th-large" id={`areaFisTotal`} clicked={toggle} iconId="areaFisTotal"/> {IntegerAreaBrazilian(totalArea)}</td>
                                <td>
                                    {`${percentNumberBrazilian(totalRec, 2)} `}
                                    {
                                        totalRec > 100 &&
                                        <Fragment>
                                            <Icon icon="question-circle" id={`recCons`} clicked={toggle2} iconId="recCons"/>
                                            <Popover className={`popover-bg bg-dark`} placement="left" isOpen={popoverOpen2} target={`recCons`} toggle={toggle2}>
                                                <PopoverHeader>Observação</PopoverHeader>
                                                <PopoverBody>
                                                    <p>Apesar do total ser maior que 100%, este é o valor reportado pelo FII em seus relatórios, cabendo aqui apenas sua reprodução.</p>
                                                </PopoverBody>
                                            </Popover>
                                        </Fragment>
                                    }
                                </td>
                            </tr>
                            <Popover className={`popover-bg bg-plum-plate`} placement="left" isOpen={popoverOpen} target={`areaFisTotal`} toggle={toggle}>
                                <PopoverHeader>Equivalência</PopoverHeader>
                                <PopoverBody>
                                    <h6>{equivalenciaCamposFutebol(totalArea)}</h6>
                                    <p>(considerando um tamanho oficial de {IntegerAreaBrazilian(sizeCampoFutebol)})</p>
                                </PopoverBody>
                            </Popover>
                            
                        </Fragment>
                    )
                }
            </tbody>
        </table>
    );
};

export default memo(AtvFisConsTable);