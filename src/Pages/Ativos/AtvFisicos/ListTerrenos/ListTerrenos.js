import React, {Fragment} from 'react';
import CardAtivo from '../../../../components/Cards/CardAtivo'
import ListTerreno from '../../../../components/Lists/ListTerreno'
import ListTerrenoTotal from '../../../../components/Lists/ListTerrenoTotal'

const ListTerrenos = (props) => {
    let totalArea = 0;

    return (
        <Fragment>
            {props.terrenos &&
                props.terrenos.length === 0 ? 
                    <h3 className="text-center p-2">Não há terrenos para serem exibidos</h3>
                    :
                    <Fragment>
                        {props.terrenos.map((terreno, ind) => (
                            <CardAtivo
                                bgNumber="primary"
                                order={ind+1}
                                key={`ter${ind}`}
                                >
                                    <ListTerreno
                                        terreno={terreno}
                                        order={ind+1}
                                        bgNumber="primary"
                                    />
                                </CardAtivo>
                        ))}
                        <CardAtivo
                            bgNumber="focus"
                            order="T"
                            >
                                <ListTerrenoTotal
                                    terrenos={props.terrenos}/>
                            </CardAtivo>
                    </Fragment>
            }
        </Fragment>
    );
};

export default ListTerrenos;