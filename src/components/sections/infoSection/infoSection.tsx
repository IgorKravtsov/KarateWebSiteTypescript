import React, {FC} from 'react'

import styles from './infoSection.module.scss';
import cn from "classnames";
import InfoBlock from "../../../UIComponents/InfoBlock/InfoBlock";

import {infoSectionData} from './InfoSectionData/InfoSectionData';

export interface IInfoSection {
    backgroundColor: 'transparent' | 'red';
}

const InfoSection:FC<IInfoSection> = ({backgroundColor }) => {
    const renderedBlocks = infoSectionData.map((block, index) => {
       return   ( <InfoBlock
                    key={index}
                    backElem={block.backElem}>
                    {block.innerData}
                </InfoBlock>
       )
    })
    return (
    <div className={cn(styles.wrapper, {
        [styles.red]: backgroundColor === 'red'
    })}>
        {renderedBlocks}
    </div>
  )
}

export default InfoSection
