import React from 'react';
import Aux from '../../hoc/Auxiliary';

import styles from './Layout.module.css';

const layout = ( props ) => (
    <Aux>
        <main>
            <div className={styles.Background} />
            {props.children}
        </main>
    </Aux>
);
    
export default layout;
