import React from 'react';

const layout = (props) => (
    <React.Fragment>
        <main className="Content">
            {props.children}
        </main>
    </React.Fragment>
)

export default layout;

