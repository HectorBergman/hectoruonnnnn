let compassheading = 0
let Initialheading = input.compassHeading()
let Conestart = (Initialheading + 135) % 360
let Coneend = (Initialheading + 225) % 360
let otherway = 0
basic.forever(function () {
    compassheading = input.compassHeading()
})
basic.forever(function () {
    if (otherway == 0) {
        if (Conestart < Coneend) {
            if (compassheading > Conestart && compassheading < Coneend) {
                basic.showString("D")
                otherway = 1
            } else {
                basic.showString("U")
            }
        } else {
            if (compassheading > Conestart || compassheading < Coneend) {
                basic.showString("D")
                otherway = 1
            } else {
            	
            }
        }
    } else {
        Conestart = (Conestart + 180) % 360
        Coneend = (Coneend + 180) % 360
        if (Conestart < Coneend) {
            if (compassheading > Conestart && compassheading < Coneend) {
                basic.showString("U")
                otherway = 0
            } else {
                basic.showString("D")
            }
        } else {
            if (compassheading > Conestart || compassheading < Coneend) {
                basic.showString("U")
                otherway = 0
            } else {
            	
            }
        }
    }
})
