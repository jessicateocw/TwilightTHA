import React from 'react';
import { useForm } from 'react-hook-form'

import {
  Text,
  Flex,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip,
  HStack
} from '@chakra-ui/react'

import { Inputs } from '../types';

export default function HookForm() {

  const [sliderValue, setSliderValue] = React.useState(5)
  const [showTooltip, setShowTooltip] = React.useState(false)
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()

  function onSubmit(values: Inputs) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl >
        <Flex w="100%" direction='row' alignItems='center' paddingBottom={8}>
            <Flex w="100%" flexDirection="column">
                <FormLabel htmlFor='price'>Price (USDT)</FormLabel>
                    <NumberInput defaultValue={0}  min={0}>
                        <NumberInputField />
                        <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                <FormErrorMessage>
                {errors.price && errors.price.message}
                </FormErrorMessage>
            </Flex>
        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit' mx={8} px={8}>
            BBO
        </Button>
        </Flex>
        <FormLabel htmlFor='amount'>
            <p style={{ alignItems:'center'}}>
                Amount (Cont) 
                <span>&#711;</span> 
            </p>
            {/* Supposed to be selector but not use what kind */}
        </FormLabel>
        <Input
          id='amount'
          placeholder='Single contract value 0.01 BTC'
          {...register('amount', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum 0.01 BTC' },
          })}
        />
        <FormErrorMessage>
          {errors.amount && errors.amount.message}
        </FormErrorMessage>
      </FormControl>
        <Slider
            id='slider'
            size="sm"
            mt={8}
            defaultValue={0}
            min={0}
            max={100}
            onChange={(v) => setSliderValue(v)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            >
            <SliderMark value={0}/>
            <SliderMark value={25}/>
            <SliderMark value={50}/>
            <SliderMark value={75}/>
            <SliderMark value={100}/>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
                hasArrow
                bg='#76fbcb'
                color='#07081b'
                placement='top'
                isOpen={showTooltip}
                label={`${sliderValue}%`}
            >
                <SliderThumb />
            </Tooltip>
        </Slider>
            <Flex flexDirection="row" justifyContent='space-between'>
                <Text color='gray.400' ml='-6px'>0</Text>
                <Text color='gray.400' mr='-6px'>100%</Text>
            </Flex>
        <Flex flexDirection="column" mt={8}>
            <HStack><Text color='gray.400'>Available </Text> <Text color='white'>-- USDT</Text></HStack>
            
            <Flex flexDirection="row" justifyContent='space-between'>
                <HStack><Text color='gray.400'>Max (Long) </Text> <Text color='white'>-- Cont</Text></HStack>
                <HStack><Text color='gray.400'>Max (Short) </Text> <Text color='white'>-- Cont</Text></HStack>
            </Flex>
        </Flex>
    </form>
   
  )
}