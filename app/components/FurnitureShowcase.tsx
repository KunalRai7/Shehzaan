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
        <TabsList className="flex justify-center space-x-2 mb-6 bg-transparent">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="px-3 py-2 text-xs sm:text-sm md:text-base md:px-4 md:py-2 rounded-full bg-card text-card-foreground shadow-md hover:bg-secondary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 font-montserrat"
            >
              {category === 'plans' ? 'Plans' : category.charAt(0).toUpperCase() + category.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>
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