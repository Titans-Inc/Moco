import { ColorTransition } from '../src/interfaces';
import { transitionToString } from '../src/utils';

test('duration valid range', () => {
    let dvr: ColorTransition = {duration: 1};
    expect(transitionToString(dvr)).toEqual('background-color 1s');
})

test('duration invalid range', () => {
    let dir: ColorTransition = {duration: -1};
    expect(() => {
        transitionToString(dir)
    }).toThrowError(new RangeError('ColorTransition.duration should be a valid positive number'));
})

test('duration timing', () => {
    let dt: ColorTransition = {duration: 0.6, timing: 'ease'};
    expect(transitionToString(dt)).toEqual('background-color 0.6s ease');
})

test('duration delay valid range', () => {
    let ddvr: ColorTransition = {duration: 0.5, delay: 1};
    expect(transitionToString(ddvr)).toEqual('background-color 0.5s 1s');
})

test('duration delay invalid range', () => {
    let ddir: ColorTransition = {duration: 3, delay: -0.3};
    expect(() => {
        transitionToString(ddir)
    }).toThrowError(new RangeError('ColorTransition.delay should be a valid positive number'));
})

test('duration timing delay', () => {
    let dtd: ColorTransition = {duration: 1.9, timing: 'linear', delay: 0.7};
    expect(transitionToString(dtd)).toEqual('background-color 1.9s linear 0.7s');
})
