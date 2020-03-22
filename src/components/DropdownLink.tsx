import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom'

type DropdownProps = {
    hrefLink: string,
    linkText: string,
}

const DropdownLink: FunctionComponent<DropdownProps> = (props) => {

    return (
        <Link to={props.hrefLink} >
        <div className="flex px-2 bg-gray-900 py-2 hover:bg-blue-700 rounded-lg">
            {props.children}
            <p className="ml-2 text-blue-400 font-semibold">{props.linkText}</p>
        </div>
        </Link>
    );
};

export default DropdownLink;