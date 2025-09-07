// Streams -> Fluxos de dados

// process.stdin.pipe(process.stdout)

import { Readable } from "node:stream";

class OneToHundredStram extends Readable {
    index = 1

    _read() {
        const i = this.index++;

        setTimeout(() => {
            if (i > 100) {
                this.push(null)
            } else {
                const buffer = Buffer.from(String(i));

                this.push(buffer);
            }
        }, 1000)
    }
}

new OneToHundredStram().pipe(process.stdout);