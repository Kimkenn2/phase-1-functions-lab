// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
 if (blocks >= 42) {
     return blocks - 42}
 else
     return ((blocks - 42) * -1)
 }
 // -----------------
 function distanceFromHqInFeet(blocks) {
     if (blocks >= 42) {
         return (blocks - 42) * 264
     } else
     return ((blocks - 42) * -1) * 264
 }
 // -----------------
 function distanceTravelledInFeet(sBlocks, eBlocks) {
   if (eBlocks >= sBlocks) {
    return ((eBlocks - sBlocks) * 264)
   } else 
        return ((sBlocks - eBlocks) * 264)
 }
 // ----------------
function calculatesFarePrice(sBlocks, eBlocks) {
 if (Math.abs(eBlocks - sBlocks) * 264 <= 400) {
     return (0)
 } else if (Math.abs(eBlocks - sBlocks) * 264 > 400 && Math.abs(eBlocks - sBlocks) * 264 < 2000) {
    return (((Math.abs(eBlocks - sBlocks) * 264) - 400) * .02)
} else if ((eBlocks - sBlocks) * 264 > 2000 && (eBlocks - sBlocks) *264 <= 2500) {
    return 25
} else if (Math.abs(eBlocks - sBlocks) * 264 > 2500)
    return `cannot travel that far`

}