import React from 'react';
import {useMyContext} from '../Context/AuthProvider';

import RotasPublicas from './routes'; //rotas publicas
import RotasPrivadas from './routesPrivate';

const RoutesMain: React.FC = () => {

    const {logado} = useMyContext();

    return logado ? <RotasPrivadas /> : <RotasPublicas />
        
}

export default RoutesMain;