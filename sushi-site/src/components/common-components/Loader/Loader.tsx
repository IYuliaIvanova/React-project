import React from 'react';
import styled from 'styled-components';
import { themes } from '../../../constants/themes';

export const Loader = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    &::before {
        position: absolute;
        content: '';
        top: 0%;
        left: 50%;
        width: 100%;
        height: 100%;
        border-radius: 500rem;
        border: 0.3em solid ${themes.colors.borderLoader};
    }
    
    &::after {
        position: absolute;
        content: '';
        top: 0%;
        left: 50%;
        width: 100%;
        height: 100%;
        animation: loader 0.8s linear;
        animation-iteration-count: infinite;
        border-radius: 500rem;
        border-color: ${themes.colors.pinkishOrange} transparent transparent;
        border-style: solid;
        border-width: 0.2em;
        box-shadow: 0px 0px 0px 1px transparent;
    }
    
    @-webkit-keyframes {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
    
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    
    @keyframes {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
    
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    
    &::before,
    &::after {
        width: 2.28571429rem;
        height: 2.28571429rem;
        margin: 0em;
    }
    
`