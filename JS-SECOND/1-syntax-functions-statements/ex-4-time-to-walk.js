function solve(steps, footLength, speedKm) {
    const distanceInMeters = steps * footLength;
    const speedForMeterInSec = speedKm / 3.6;
    /*
    Метър за секунда (или метър в секунда)
    (означение: m/s или m.s-1, в популярни издания се използва и м/с) е производна
    единица за измерване на скорост в системата SI.
    Тяло, което се движи със скорост 1 m/s, изминава всяка секунда разстояние от 1 метър.
     1 m/s = 3,6 km/h
     1 km/h = 0,28 m/s
     */

    const minBreak = Math.floor(distanceInMeters / 500)
    const minBreakIntoSec = minBreak * 60
    console.log(distanceInMeters / speedForMeterInSec)
    console.log(speedForMeterInSec)
    console.log(distanceInMeters )
    const time = distanceInMeters / speedForMeterInSec + minBreakIntoSec;

    const timeInHours = Math.floor(time / 3600);
    const timeInMins = Math.floor(time / 60);
    const timeInSecs = Math.round(time % 60);


    return `${String(timeInHours).padStart(2, '0')}:${String(timeInMins).padStart(2, '0')}:${String(timeInSecs).padStart(2, '0')}`
}

solve(4000, 0.60, 5)