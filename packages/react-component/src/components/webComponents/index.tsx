import { componentMapping } from './mapping'
import {  TemplateBlock } from './types'

const TemplateBlocks = ({ blocks }: { blocks: TemplateBlock[] }) => {
   /**
    * creates a grouping based on element type
    */
   const configGroupingBasedOnElements = blocks?.reduce(
      (acc, curr, index) => {
         const prevItem = blocks?.[index - 1]

         if (prevItem && prevItem?.type !== curr?.type) {
            acc = { ...acc, [Object.keys(acc).length]: [] }
         }

         const lastKey = Object.keys(acc).length - 1

         return {
            ...acc,
            [lastKey]: [...(acc?.[lastKey] ?? []), curr],
         }
      },
      { 0: [] } as { [x: string]: TemplateBlock[] }
   )

   const styleOfSection = {
      button: 'row',
      tags: 'row',
      input: 'column',
      banner_image: 'column',
   }

   return (
      <div style={{padding: '0 0 0.3rem 0'}}>
         {Object.keys(configGroupingBasedOnElements).map((section) => {
            const typeOfSection = configGroupingBasedOnElements[section]?.[0]?.type

            return (
               // Container
               <div
                  key={section}
                  className={`flex ${
                     (styleOfSection as any)?.[typeOfSection] === 'row'
                        ? 'flex-row gap-2'
                        : 'flex-col'
                  }`}
               >
                  {configGroupingBasedOnElements[section].map((config, idx) => {
                     const Component = (componentMapping)?.[config.type]

                     // get props from a function
                     const props = {
                        id: config.id,
                        size: 'small' as const,
                        className: config.variant === 'primary' ? 'accept-button' : 'reject-button',
                        variant: config.variant as TemplateBlock['variant'],
                     }

                     // Indiviual Item
                     return (
                        // @ts-ignore
                        <Component key={idx} {...props}>
                           {config.text}
                        </Component>
                     )
                  })}
               </div>
            )
         })}
      </div>
   )
}

export default TemplateBlocks
