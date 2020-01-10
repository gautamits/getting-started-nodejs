curl -s https://gist.githubusercontent.com/HaleTom/89ffe32783f89f403bba96bd7bcd1263/raw/ | bash

curl -s https://gist.githubusercontent.com/justinabrahms/1047767/raw/a79218b6ca8c1c04856968d2d202510a4f7ec215/colortest.py | python

curl -s https://gitlab.gnome.org/GNOME/vte/raw/vte-0-38/perf/256test.sh | bash

php7 -r 'for ($x = 0; $x < 255000; $x++) {echo html_entity_decode("&#".$x.";",ENT_NOQUOTES,"UTF-8");}'

curl -s https://gist.githubusercontent.com/WoLpH/8b6f697ecc06318004728b8c0127d9b3/raw/250eb2e3f2acca1c51aa52adf611ec0380291e8a/colortest.py | python3
