import { css } from '@emotion/react';

import { Theme } from '@mui/material';

const style = (theme: Theme) => css`
    display: flex;
    padding: 1.25rem 8.75rem 0 calc(50% - 60px);
    z-index: 1;

    .animationWrap {
        position: fixed !important;
        top: 1.25rem;
        left: 0;
        width: calc(50% - 60px);
        overflow: hidden;
        // flex: 1 1 50%;
        // overflow: hidden;

        > .wrap {
            display: flex;
            justify-content: center;
            align-items: center;
            height: calc(100vh - 1.25rem);
            padding: 0 2em;

            > .innerWrap {
                position: relative;
                width: 560px;
                height: 560px;
                margin: 0 auto;

                > iframe {
                    width: 100%;
                }

                > .txtWrap {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;

                    > * {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        font-size: 16px;
                        font-weight: 400;
                    }

                    > .txt1 {
                        margin: -46% 0 0 -42%;
                    }
                    > .txt2 {
                        margin: -35.6% 0 0 -31.5%;
                    }
                    > .txt3 {
                        margin: -18% 0 0 -13.5%;
                    }
                    > .txt4 {
                        margin: 13.5% 0 0 18%;
                    }
                    > .txt5 {
                        margin: 31.7% 0 0 35.5%;
                    }
                    > .txt6 {
                        margin: 41.4% 0 0 45.6%;
                    }
                    > .main {
                        transform: translateX(-50%) translateY(-50%);
                        font-size: 48px;
                        font-weight: 700;
                        line-height: 1;

                        > div {
                            white-space: nowrap;

                            > * {
                                display: inline-block;
                            }
                        }
                    }
                }
            }
        }
    }

    .listWrap {
        min-width: 500px;
        display: flex;
        flex-direction: column;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            top: -5rem;
            left: 0.18rem;
            width: 1px;
            height: 6.1rem;
            background-color: ${theme.palette.divider};
        }

        .item {
            display: flex;
            position: relative;
            padding: 0 0 6rem 3rem;

            &:before {
                content: '';
                position: absolute;
                top: 1.5rem;
                left: 0.18rem;
                width: 1px;
                height: calc(100% - 1.6rem);
                background-color: ${theme.palette.divider};
            }

            &:after {
                content: '';
                position: absolute;
                top: 0.4rem;
                left: 0;
                width: 0.4rem;
                height: 0.4rem;
                border-radius: 50%;
                background-color: #fff;
            }

            > .title {
                flex: 0 0 13rem;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                font-size: 2.375rem;
                line-height: 1.4em;
                transition: all 0.24s;

                .yearFirst {
                    font-size: 1.25rem;
                    line-height: 1em;
                }
                .yearLast {
                    font-weight: 600;
                }
                .curComp {
                    padding: 8px 14px;
                    margin-top: 1rem;
                    border-radius: 100px;
                    background: rgba(0, 0, 0, 0.5);
                    font-size: 0.875rem;
                    font-weight: 200;
                    line-height: 1;
                }
            }

            > .compPrjList {
                flex: 1 1;
                transition: all 0.24s;

                > .comp {
                    display: flex;
                    align-items: center;
                    gap: 3rem;
                    padding: 1.2rem 0 2.8rem;
                    font-size: 1.375rem;
                    font-weight: 600;
                    line-height: 1;

                    > .btns {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;

                        > * {
                            min-width: 0;
                            padding: 0.2rem;
                            border-radius: 50%;
                        }
                    }
                }
                > .prjList {
                    display: flex;
                    max-width: 500px;
                    flex-direction: column;
                    gap: 2rem;

                    > li {
                        position: relative;

                        > .prjItem {
                            display: flex;
                            flex-wrap: wrap;
                            padding: 1rem 2rem;
                            margin: -1rem -2rem;
                            border-radius: 3rem;
                            background: rgba(255, 255, 255, 0);
                            box-shadow: 0 0 8px rgba(0, 0, 0, 0);
                            transition: all 0.12s ease;

                            .prjName {
                                flex: 1 1;
                                font-weight: 400;
                                line-height: 1.6em;
                            }
                            .date {
                                flex: 0 0;
                                margin-left: auto;
                                color: rgba(255, 255, 255, 0.5);
                                font-weight: 200;
                            }
                            .part {
                                flex: none;
                                display: flex;
                                gap: 1em;
                                width: 100%;
                                margin-top: 0.5rem;
                                font-size: 0.75rem;
                                line-height: 1;

                                > * {
                                    padding: 4px 10px;
                                    border-radius: 100px;
                                    background: rgba(255, 255, 255, 0.1);
                                }
                            }

                            .btnEdit {
                                position: absolute;
                                top: 50%;
                                right: 0.3rem;
                                width: 30px;
                                height: 30px;
                                min-width: 0;
                                margin-top: -15px;
                                border-radius: 50%;
                                opacity: 0;
                                transition: all 0.12s ease;
                            }
                            .btnDelete {
                                position: absolute;
                                top: 50%;
                                right: -2rem;
                                width: 30px;
                                height: 30px;
                                min-width: 0;
                                margin-top: -15px;
                                border-radius: 50%;
                                opacity: 0;
                                transition: all 0.12s ease;
                            }

                            &:hover {
                                padding: 1rem 3rem;
                                margin: -1rem -3rem;
                                background: rgba(0, 0, 0, 0.4);

                                .btnEdit,
                                .btnDelete {
                                    opacity: 1;
                                }
                            }
                        }

                        > .editPrjItem {
                            position: absolute;
                            top: 50%;
                            left: -200px;
                            width: calc(100% + 245px);
                            z-index: 1;

                            > .wrap {
                                display: grid;
                                grid-template-columns: 140px 90px 1fr 40px 40px;
                                gap: 4px;
                                max-width: none;
                                height: auto;
                                padding: 1rem 1.5rem 1rem 1rem;
                                margin-top: -2.3rem;
                                border-radius: 1rem;
                                background: #ffa700;
                                box-shadow: 0 0 10px rgba(0, 0, 0, 1);
                                text-align: center;

                                > button {
                                    padding: 0;
                                    min-width: 0;
                                }
                            }
                        }
                    }
                }
                > .noneProject {
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.75rem;
                    font-weight: 100;
                }
            }

            .isBlur {
                filter: blur(3px);
            }

            // Edit Mode
            > .editItem {
                position: absolute;
                top: 0;
                left: 0;
                width: calc(100% - 4rem);

                .wrap {
                    display: grid;
                    grid-template-columns: 50px 90px 10px 90px 1fr 40px 40px;
                    gap: 4px;
                    padding: 1rem 1.5rem 1rem 1rem;
                    margin: -0.3rem 2rem 0;
                    border-radius: 1rem;
                    background: #ffa700;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
                    text-align: center;

                    > span {
                        align-self: center;
                        color: #000;
                    }

                    > button {
                        padding: 0;
                        min-width: 0;
                    }
                }
            }

            // 소개
            &.analyze {
                display: block;

                &:before {
                    content: '';
                    position: absolute;
                    top: 2.5rem;
                    left: 0.18rem;
                    width: 1px;
                    height: calc(100% - 2.6rem);
                    background-color: ${theme.palette.divider};
                }

                &:after {
                    content: '';
                    position: absolute;
                    top: 1.5rem;
                    left: 0;
                    width: 0.4rem;
                    height: 0.4rem;
                    border-radius: 50%;
                    background-color: #fff;
                }

                .title {
                    margin-bottom: 3rem;
                    font-weight: 600;
                }
                .aboutInfo {
                    display: flex;
                    gap: 2rem;

                    > .img {
                        flex: 0 0 200px;
                        width: 200px;
                        height: 200px;
                        border-radius: 50%;
                        background: rgba(0, 0, 0, 0.3);
                        overflow: hidden;
                    }

                    > .info {
                        flex: 1 1;
                        align-self: center;

                        > .name {
                            font-size: 1.875rem;
                            font-weight: 700;
                        }
                        > .infos {
                            padding: 0.5rem 0 0;

                            > dl {
                                margin: 0.5rem 0;

                                dt {
                                    font-size: 0.75rem;
                                    font-weight: 100;
                                }
                                dd {
                                    padding: 0;
                                    margin: 0;
                                    font-size: 1.125rem;
                                    font-weight: 300;
                                }
                            }
                        }
                    }
                }

                // .img {
                //     height: 300px;
                // }
            }

            // 추가 모드일 경우
            &.isAddMode {
                // display: inline-flex;
                width: 0;
                padding: 3em 0 3rem;
                transition: all 0.24s;

                &:before {
                    top: 45px;
                    height: calc(100% - 48px);
                }

                &:after {
                    content: '+';
                    left: -12px;
                    width: 30px;
                    height: 30px;
                    padding: 0;
                    background: #ffa700;
                    color: #000;
                    font-size: 2rem;
                    text-align: center;
                    line-height: 30px;
                    cursor: pointer;
                    transition: (background, color) 0.24s;
                }

                > .editItem {
                    margin-top: -0.5rem;
                }

                &:hover {
                    &:after {
                        background: #000;
                        color: #ffa700;
                    }
                }

                &.isEditMode {
                    width: 100%;

                    &:after {
                        background: #000;
                        color: #ffa700;
                    }
                }
            }
        }
    }

    .glow {
        text-shadow:
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 15px #fff,
            0 0 20px #ff00de,
            0 0 35px #ff00de,
            0 0 40px #ff00de,
            0 0 50px #ff00de,
            0 0 75px #ff00de;
    }

    ${theme.breakpoints.down('lg')} {
        // .animationWrap {
        //     flex: 1 1 40%;

        //     .innerWrap {
        //         transform: scale(0.8);
        //     }
        // }
        // .listWrap {
        //     flex: 1 1 60%;
        // }
    }

    ${theme.breakpoints.down('md')} {
        padding: 1.25rem 3rem 0;

        .animationWrap {
            display: none;
        }
        .listWrap {
            flex: 1 1;
        }
    }

    ${theme.breakpoints.down('sm')} {
        padding: 0;

        .listWrap {
            padding-top: 2rem;

            &:before {
                content: none;
            }

            > .item,
            > * > .item {
                display: block;
                padding: 0 10% 4rem;

                &:before,
                &:after {
                    content: none !important;
                }

                > .title {
                    justify-content: center;
                    flex-direction: row;
                    flex-wrap: wrap;
                    align-items: center;

                    > .yearFirst {
                        white-space: nowrap;
                        font-weight: 100;
                    }

                    > .yearLast {
                        font-size: 1.3rem;
                        font-weight: 400;
                        margin-left: 3px;
                    }

                    .curComp {
                        padding: 0.5em 1em;
                        margin-top: 0;
                        margin-left: 0.5em;
                        font-size: 11px;
                    }
                }

                > .compPrjList {
                    > .comp {
                        justify-content: center;
                        flex-wrap: wrap;
                        gap: 0.4rem 1rem;
                        padding: 0 0 2rem;
                        font-size: 2.2rem;

                        > .btns {
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;

                            > * {
                                min-width: 0;
                                padding: 0.2rem;
                                border-radius: 50%;
                            }
                        }
                    }
                    > .prjList {
                        max-width: none;
                        flex-direction: column;
                        gap: 2rem;

                        > li {
                            position: relative;

                            > .prjItem {
                                position: relative;
                                flex-direction: column;
                                padding: 0;
                                margin: 0;

                                .date {
                                    margin-left: 0;
                                }
                                .part {
                                    display: flex;
                                    flex-wrap: wrap;
                                    gap: 1em;
                                    font-size: 11px;
                                    font-weight: 100;
                                }

                                .btnEdit {
                                    right: 2.2rem;
                                    opacity: 1;
                                }
                                .btnDelete {
                                    right: 0;
                                    opacity: 1;
                                }

                                &:hover {
                                    padding: 0;
                                    margin: 0;
                                    background: none;
                                }
                            }

                            > .editPrjItem {
                                position: absolute;
                                top: 50%;
                                left: -200px;
                                width: calc(100% + 245px);
                                z-index: 1;

                                > .wrap {
                                    display: grid;
                                    grid-template-columns: 140px 90px 1fr 40px 40px;
                                    gap: 4px;
                                    max-width: none;
                                    height: auto;
                                    padding: 1rem 1.5rem 1rem 1rem;
                                    margin-top: -2.3rem;
                                    border-radius: 1rem;
                                    background: #ffa700;
                                    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
                                    text-align: center;

                                    > button {
                                        padding: 0;
                                        min-width: 0;
                                    }
                                }
                            }
                        }
                    }
                    > .noneProject {
                        color: rgba(255, 255, 255, 0.5);
                        font-size: 0.75rem;
                        font-weight: 100;
                    }
                }

                // 추가 모드일 경우
                &.isAddMode {
                    width: auto;
                    padding: 4rem 0;
                    margin: 0 !important;
                    transition: all 0.24s;

                    &:before {
                        top: 45px;
                        height: calc(100% - 48px);
                    }

                    &:after {
                        content: '+' !important;
                        top: 50%;
                        left: 50%;
                        transform: translateX(-50%) translateY(-50%);
                        width: 1em;
                        height: 1em;
                        font-size: 4rem;
                        line-height: 1;
                    }

                    > .editItem {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        padding: 0 1rem;
                        margin-top: 0;
                        box-sizing: border-box;
                        z-index: 99999;

                        &:before {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: rgba(0, 0, 0, 0.5);
                            z-index: -1;
                        }

                        > .wrap {
                            display: flex;
                            gap: 0.5rem 0;
                            flex-wrap: wrap;
                            justify-content: center;
                            align-items: center;
                            width: 100%;
                            height: auto;
                            margin: 0;

                            > div {
                                &:nth-of-type(1) {
                                    flex: none;
                                    width: 100%;
                                }
                                &:nth-of-type(2) {
                                    width: 45%;
                                    > * {
                                        width: 100% !important;
                                    }
                                }
                                &:nth-of-type(3) {
                                    width: 10%;
                                }
                                &:nth-of-type(4) {
                                    width: 45%;
                                    > * {
                                        width: 100% !important;
                                    }
                                }
                                &:nth-of-type(5) {
                                    flex: none;
                                    width: 100%;
                                }
                            }
                            > button {
                                flex: none;
                                width: 4rem;
                                height: 3rem;
                                margin-top: 1rem;

                                &:nth-of-type(1) {
                                    margin-right: 4px;
                                }
                            }
                        }
                    }

                    &:hover {
                        &:after {
                            background: #000;
                            color: #ffa700;
                        }
                    }

                    &.isEditMode {
                        width: 100%;

                        &:after {
                            background: #000;
                            color: #ffa700;
                        }
                    }
                }
            }
            > * > .item {
                &:first-of-type {
                    padding-top: 3rem;
                }
            }

            // 소개
            .analyze {
                padding-bottom: 0;

                > .title {
                    display: none;
                }

                .aboutInfo {
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    text-align: center;
                }
            }

            // 회사 관리
            .editItem {
                top: 0;
                left: 0;
                width: 100% !important;

                > .wrap {
                    display: flex !important;
                    flex-wrap: wrap;
                    gap: 0.5rem 0 !important;
                    justify-content: center !important;
                    align-items: center !important;

                    > div {
                        &:nth-of-type(1) {
                            flex: none;
                            width: 100%;
                        }
                        &:nth-of-type(2) {
                            width: 45%;
                            > * {
                                width: 100% !important;
                            }
                        }
                        &:nth-of-type(3) {
                            width: 10%;
                        }
                        &:nth-of-type(4) {
                            width: 45%;
                            > * {
                                width: 100% !important;
                            }
                        }
                        &:nth-of-type(5) {
                            flex: none;
                            width: 100%;
                        }
                    }
                    > button {
                        flex: none;
                        width: 4rem;
                        height: 3rem;
                        margin-top: 1rem;

                        &:nth-of-type(1) {
                            margin-right: 4px;
                        }
                    }
                }
            }

            // 프로젝트 관리
            .editPrjItem {
                left: 0 !important;
                width: 100% !important;

                > .wrap {
                    display: flex !important;
                    flex-wrap: wrap;
                    gap: 0.5rem 0 !important;
                    justify-content: center !important;
                    align-items: center !important;
                    transform: translateY(-30%);

                    > div {
                        &:nth-of-type(1) {
                            flex: none;
                            width: 100%;
                        }
                        &:nth-of-type(2) {
                            flex: none;
                            width: 100%;
                            > * {
                                width: 100% !important;
                            }
                        }
                        &:nth-of-type(3) {
                            flex: none;
                            width: 100%;
                        }
                    }
                    > button {
                        flex: none;
                        width: 4rem;
                        height: 3rem;
                        margin-top: 1rem;

                        &:nth-of-type(1) {
                            margin-right: 4px;
                        }
                    }
                }
            }
        }
    }
`;

export { style as aboutStyle };
