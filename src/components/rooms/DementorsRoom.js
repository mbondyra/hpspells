import React from "react";
import {Entity} from "aframe-react";
import Stone from "./../Stone";

export default props => {
    let animation = "";
    if (!props.dementorsVisible){
        animation = (<a-animation attribute="position"
                     dur="1000"
                     to="0 1000 0"
                     repeat="1"></a-animation>);
    } else if ( !props.doorVisible) {
        animation = ( <a-animation attribute="rotation"
                                   dur="10000"
                                   to="0 360 0"
                                   repeat="indefinite"></a-animation>);
    }
    return (
        <Entity>

            <Entity scale="0.02 0.02 0.02"
                    position={"0 0.3 " + (-props.dementorsRoom + props.y / 15)} rotation="0 180 0">

                <a-obj-model src="#dementor-obj" mtl="#dementor-mtl">{animation}</a-obj-model>
            </Entity>
            <Entity scale="0.02 0.02 0.02"
                    position={((props.x / 2 - 1) / 2 + 1) + " 0.3 " + (-props.dementorsRoom + props.y / 15)}
                    rotation="0 180 0">

                <a-obj-model src="#dementor-obj" mtl="#dementor-mtl">{animation}</a-obj-model>
            </Entity>
            <Entity scale="0.02 0.02 0.02"
                    position={-((props.x / 2 - 1) / 2 + 1) + " 0.3 " + (-props.dementorsRoom + props.y / 15)}
                    rotation="0 180 0">

                <a-obj-model src="#dementor-obj" mtl="#dementor-mtl">{animation}</a-obj-model>
            </Entity>

            <Stone
                stoneVisible={props.stoneVisible}
                dementorsRoom={props.dementorsRoom}
                height={props.height}
            />
        </Entity>
    )
}