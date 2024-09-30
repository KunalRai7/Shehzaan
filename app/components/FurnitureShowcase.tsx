'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Exterior from './Exterior'
import Interior from './Interior'
import Planning from './Planning'
import Work from './Work'
import { AnimatePresence } from 'framer-motion'

const categories = ['exterior', 'interior', 'plans', 'work']

export default function FurnitureShowcase() {
  return (
    <>
      <Tabs defaultValue="exterior" className="w-full">
        <div className="overflow-x-auto pb-4">
          <TabsList className="flex justify-center space-x-2 mb-6 bg-transparent min-w-max mx-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="px-4 py-2 text-sm md:text-base md:px-6 md:py-3 rounded-full bg-white shadow-md hover:bg-neutral-100 data-[state=active]:bg-neutral-800 data-[state=active]:text-white transition-all duration-300 font-montserrat whitespace-nowrap"
              >
                {category === 'plans' ? 'Plans' : category.charAt(0).toUpperCase() + category.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <AnimatePresence mode="wait">
          <TabsContent key="exterior" value="exterior">
            <Exterior />
          </TabsContent>
          <TabsContent key="interior" value="interior">
            <Interior />
          </TabsContent>
          <TabsContent key="plans" value="plans">
            <Planning />
          </TabsContent>
          <TabsContent key="work" value="work">
            <Work />
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </>
  )
}