import React, { useRef } from 'react';
import { CopyBlock,dracula} from "react-code-blocks";



export const MyCodeBlock = (props) => {


    return (
        <div>
            <CopyBlock
                text={props.code}
                language={props.language}
                showLineNumbers={true}
                theme={dracula}
                codeBlock ={true}
            />
        </div>
    );
};

