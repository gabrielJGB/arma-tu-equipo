#! python3
import requests
import bs4

equipos = ['aldosivi', 'argentinos', 'arsenal', 'atltucuman', 'banfield', 'boca', 'cantralcdba', 'colon', 'defyjusticia', 'estudiantes', 'gimnasia','godoycruz', 'huracan', 'independiente', 'lanus', 'newells', 'patronato', 'racing', 'river', 'central', 'sanlorenzo', 'talleres', 'union', 'velez','platense','sarmiento']

link_equipos = [
    'https://webcache.googleusercontent.com/search?q=cache:muLPZwaeXd4J:https://www.transfermarkt.es/club-atletico-aldosivi-mdp-/startseite/verein/12301+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:GM-s-77bDAcJ:https://www.transfermarkt.es/argentinos-juniors/startseite/verein/1030+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:V5CLpcc9nXAJ:https://www.transfermarkt.es/arsenal-de-sarandi-fc/startseite/verein/4673+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:dG4U8LfcmtEJ:https://www.transfermarkt.es/club-atletico-tucuman/startseite/verein/14554+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:gHsJ7IX6Sl4J:https://www.transfermarkt.es/club-atletico-banfield/startseite/verein/830+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:u6GSKxJN0T8J:https://www.transfermarkt.es/club-atletico-boca-juniors/startseite/verein/189+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:kbO6qjqySCUJ:https://www.transfermarkt.com.ar/club-atletico-central-cordoba-sde-/startseite/verein/31284+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:omey-X6dxSIJ:https://www.transfermarkt.es/club-atletico-colon-santa-fe-/startseite/verein/1070+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:vq_2qMRFjEAJ:https://www.transfermarkt.es/defensa-y-justicia/startseite/verein/2402+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:12YdJZS0iV8J:https://www.transfermarkt.es/estudiantes-de-la-plata/startseite/verein/288+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:NrSFfyQemuQJ:https://www.transfermarkt.es/club-de-gimnasia-y-esgrima-la-plata/startseite/verein/1106+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:kDILVAB-xvQJ:https://www.transfermarkt.es/club-deportivo-godoy-cruz/startseite/verein/12574+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:Q4mSlOcz9iYJ:https://www.transfermarkt.com.ar/club-atletico-huracan/startseite/verein/2063+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:oIE4Fko4KoYJ:https://www.transfermarkt.es/ca-independiente-de-avellaneda/startseite/verein/1234+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:P2KoENgTlVsJ:https://www.transfermarkt.com.ar/club-atletico-lanus/startseite/verein/333+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:lCwuk489TvEJ:https://www.transfermarkt.es/club-atletico-newells-old-boys/startseite/verein/1286+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:m7vKYB-NzoMJ:https://www.transfermarkt.com.ar/club-atletico-patronato/startseite/verein/19806+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:qpCvJGbMdjgJ:https://www.transfermarkt.com.ar/racing-club-de-avellaneda/startseite/verein/1444+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:mcT21Z4dgckJ:https://www.transfermarkt.es/club-atletico-river-plate/startseite/verein/209+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:kod4fhC075QJ:https://www.transfermarkt.es/club-atletico-rosario-central/startseite/verein/1418+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:fWUgjFhHwkMJ:https://www.transfermarkt.es/club-atletico-san-lorenzo-de-almagro/startseite/verein/1775+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:JmlgpRFMKfYJ:https://www.transfermarkt.com.ar/talleres-de-cordoba-ca/startseite/verein/3938+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:JP5Xxf84UYEJ:https://www.transfermarkt.es/ca-union-santa-fe/startseite/verein/7097+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:gtrRdoySqWoJ:https://www.transfermarkt.es/club-atletico-velez-sarsfield/startseite/verein/1029+&cd=1&hl=es-419&ct=clnk&gl=ar',
	'https://webcache.googleusercontent.com/search?q=cache:Wq1qdN5UufMJ:https://www.transfermarkt.es/club-atletico-platense/startseite/verein/928+&cd=1&hl=es-419&ct=clnk&gl=ar',
    'https://webcache.googleusercontent.com/search?q=cache:pUw0RoC96MQJ:https://www.transfermarkt.es/club-atletico-sarmiento-junin-/startseite/verein/12454+&cd=1&hl=es-419&ct=clnk&gl=ar'
]



content = 'const teams = [\n\t\t'

for k in range(len(equipos)):

    res = requests.get(link_equipos[k])
    res.raise_for_status()
    soup = bs4.BeautifulSoup(res.text, 'html.parser')
    posicion = soup.select('.rueckennummer')
    numero = soup.select('.rn_nummer')
    nombres = soup.select('.di > .show-for-small > a')

    content = content + '\t {\n\t\tteamName:"%s",\n\t\tplayers:[\n' %(equipos[k])

    for i in range(len(nombres)):
        content = content + '\t\t\t{number:"%s",name:"%s",position:"' %(numero[i].text.strip(),nombres[i].text.strip())

        if posicion[i].get('title') == "Portero":
            content = content + "goalkeeper"
        elif posicion[i].get('title') == "Defensa":
            content = content + "defender"
        elif posicion[i].get('title') == "Medio campo":
            content = content + "midfielder"
        elif posicion[i].get('title') == "Delantero":
            content = content + "forward"
        content = content + '"},\n'

    content = content + '\n\t\t\t]\n\t\t},\n' 
    print(equipos[k]+ ': Completado')

content = content + ']\n\nexport default teams'

ruta = "C:\\Users\\GABRIEL\\Desktop\\teamsInfo.txt"
archivo = open(ruta,'w')
archivo.write(content)
archivo.close()

print('\nGuardado en: ' +ruta+ '\n')
