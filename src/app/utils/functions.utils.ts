export function getMonthString(month): string {
    let masmes;
    if (month == 1) {
        masmes = "Enero"
    } else
        if (month == 2) {
            masmes = "Febrero"
        } else
            if (month == 3) {
                masmes = "Marzo"
            } else
                if (month == 4) {
                    masmes = "Abril"
                } else
                    if (month == 5) {
                        masmes = "Mayo"
                    } else
                        if (month == 6) {
                            masmes = "Junio"
                        } else
                            if (month == 7) {
                                masmes = "Julio"
                            } else
                                if (month == 8) {
                                    masmes = "Agosto"
                                } else
                                    if (month == 9) {
                                        masmes = "Septiembre"
                                    } else
                                        if (month == 10) {
                                            masmes = "Octubre"
                                        } else
                                            if (month == 11) {
                                                masmes = "Noviembre"
                                            } else
                                                if (month == 12) {
                                                    masmes = "Diciembre"
                                                }

    return masmes
}