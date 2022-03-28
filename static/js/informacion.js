// Read a page's GET URL variables and return them as an associative array.
// https://stackoverflow.com/questions/4656843/get-querystring-from-url-using-jquery

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

$( document ).ready(function() {
    var params = getUrlVars();
    var idParam = params["id"];
    var index = infoEnfermedades.findIndex(x => x.id === idParam);

    if (index != -1) {
        $("#nombre").text( infoEnfermedades[index].nombre );
        $("#definicion").html( infoEnfermedades[index].definicion );
        $("#causas").html( infoEnfermedades[index].causas );
        $("#sintomas").html( infoEnfermedades[index].sintomas );
        $("#tratamiento").html( infoEnfermedades[index].tratamiento );

        $(document).prop('title', 'Enfermedad - ' + infoEnfermedades[index].nombre );
    } else {
        $("#info").text("No se encontró la enfermedad seleccionada.");
    }

});


const infoEnfermedades = [{
    "id": "covid",
    "nombre": "COVID-19",
    "definicion": "El coronavirus es un grupo de virus que causan enfermedades que van desde el resfriado común hasta enfermedades más graves como neumonía, síndrome respiratorio de Oriente Medio (MERS) y síndrome respiratorio agudo grave (SARS).",
    "sintomas": "Los signos y síntomas de la enfermedad por coronavirus 2019 (COVID-19) pueden aparecer entre 2 y 14 días después de la exposición al virus.\nLos principales síntomas del virus coronavirus incluyen:\nSíntomas respiratorios (similares a los de un resfriado)\nFiebre (alta temperatura)\nTos seca\nFalta de aliento o cansancio\nDificultades respiratorias\nEn casos más graves, el virus puede causar neumonía o síndrome respiratorio agudo grave (SRAS) que es una forma grave de neumonía, insuficiencia renal y hasta la muerte. En otros casos, algunas personas infectadas no desarrollan ningún síntoma, pero pueden contagiar igualmente al resto de la población.",
    "causas": "El coronavirus se transmite por contacto de persona a persona con algún infectado y a través de las gotitas respiratorias (llamadas aerosoles) producidas cuando una persona infectada tose, estornuda, respira, canta o habla.",
    "tratamiento": "La mayoría de quienes se enferman con COVID-19 solo presenta una enfermedad leve y puede recuperarse en casa. Los síntomas pueden durar unos días, y quienes tienen el virus podrían sentirse mejor en más o menos una semana. El tratamiento tiene como objetivo aliviar los síntomas y consiste en el descanso, la ingesta de líquidos y los analgésicos."
},
{
    "id": "asma",
    "nombre": "Asma",
    "definicion": "El asma es una afección en la que las vías respiratorias se estrechan e hinchan, lo que puede producir mayor mucosidad. Esto puede dificultar la respiración y provocar tos, un silbido (sibilancia) al exhalar y falta de aire. Para algunas personas, el asma es una molestia menor. Para otras puede ser un problema considerable que interfiere en las actividades cotidianas y que puede producir ataques de asma que pongan en riesgo la vida.\nEl asma no tiene cura, pero sus síntomas pueden controlarse. Dado que el asma suele cambiar con el tiempo, es importante que colabores con el médico para hacer un seguimiento de los signos y los síntomas y ajustar el tratamiento según sea necesario.",
    "sintomas": "Los síntomas del asma varían según la persona. Es posible que tengas ataques de asma con poca frecuencia, síntomas solamente en ciertos momentos, como cuando haces ejercicio, o síntomas en todo momento.\nLos signos y síntomas del asma comprenden:\n- Falta de aire\n- Dolor u opresión del pecho\n- Sibilancias al exhalar, que es un signo común de asma en los niños\n- Problemas para dormir causados por falta de aliento, tos o sibilancia al respirar\n- Tos o sibilancia al respirar que empeora con un virus respiratorio, como un resfriado o gripe\nLos signos que indican que probablemente el asma esté empeorando comprenden:\n- Signos y síntomas del asma que son más frecuentes y molestos\n- Dificultad creciente para respirar, medida con un dispositivo utilizado para comprobar el funcionamiento de los pulmones (medidor de flujo espiratorio)\n- Necesidad de usar un inhalador de alivio rápido con mayor frecuencia\n",
    "causas": "Para algunas personas, los signos y síntomas del asma se exacerban en ciertas situaciones:\n- <b>Asma provocada por el ejercicio<\/b>, que puede empeorar con el aire frío y seco\n- <b>Asma ocupacional<\/b>, desencadenada por irritantes en el lugar de trabajo, como vapores químicos, gases o polvo\n- El <b>asma inducida por la alergia<\/b>, desencadenada por sustancias transportadas por el aire, como el polen, esporas de moho, residuos de cucarachas, o partículas de piel y saliva seca derramada por los animales domésticos (caspa de mascotas)",
    "tratamiento": "El tratamiento suele consistir en aprender a reconocer los factores desencadenantes, tomar medidas para evitarlos y hacer un seguimiento de la respiración para asegurarte de que los medicamentos mantienen los síntomas bajo control. En caso de un ataque de asma, es posible que tengas que utilizar un inhalador de alivio rápido."
},{
    "id": "neumonia",
    "nombre": "Neumonia",
    "definicion": "La neumonía es una infección que inflama los sacos aéreos de uno o ambos pulmones. Los sacos aéreos se pueden llenar de líquido o pus (material purulento), lo que provoca tos con flema o pus, fiebre, escalofríos y dificultad para respirar. Diversos microrganismos, como bacterias, virus y hongos, pueden provocar neumonía.\nLa neumonía puede variar en gravedad desde suave a potencialmente mortal. Es más grave en bebés y niños pequeños, personas mayores a 65 años, y personas con problemas de salud o sistemas inmunitarios debilitados.", 
    "sintomas": "Los signos y síntomas de la neumonía varían de moderados a graves y dependen de varios factores, como el tipo de germen que causó la infección, tu edad y tu salud en general. Los signos y síntomas moderados suelen ser similares a los de un resfrío o una gripe, pero duran más tiempo.\nLos signos y síntomas de la neumonía pueden incluir lo siguiente:\n- Dolor en el pecho al respirar o toser\n- Desorientación o cambios de percepción mental (en adultos de 65 años o más)\n- Tos que puede producir flema\n- Fatiga\n- Fiebre, transpiración y escalofríos con temblor\n- Temperatura corporal más baja de lo normal (en adultos mayores de 65 años y personas con un sistema inmunitario débil)\n- Náuseas, vómitos o diarrea\n- Dificultad para respirar\nPuede que los recién nacidos y bebés no muestren signos de estar sufriendo la infección. O bien, pueden vomitar, tener fiebre y tos, parecer inquietos o cansados y sin energía, o presentar dificultad para respirar y comer.",
    "causas": "Muchos gérmenes pueden causar neumonía. Los más comunes son las bacterias y los virus en el aire que respiramos. El cuerpo normalmente evita que estos gérmenes infecten los pulmones. Pero a veces estos gérmenes pueden dominar tu sistema inmunitario, incluso si tu salud es generalmente buena.",
    "tratamiento": "El tratamiento de las neumonías bacterianas es a base de fármacos antibióticos. Hay una diversidad muy importante de antibióticos y la decisión del tipo de antibiótico depende del germen que se sospecha, la gravedad de la neumonía y las características del enfermo. En la mayoría de los casos, no es necesario buscar el germen causante, salvo que se trate de una neumonía grave o no responda al tratamiento."
},{
    "id": "resfriado",
    "nombre": "Resfriado",
    "definicion": "El resfriado común es una infección viral del revestimiento interno de la nariz, los senos paranasales y la garganta, a menudo comienzan con una irritación o dolor en la garganta, o molestias en la nariz, seguidas de estornudos, secreción nasal, tos y una sensación general de malestar.", 
    "sintomas": "Los síntomas del resfriado comienzan entre 1 y 3 días después de la infección. Por lo general, el primer síntoma es picor o dolor de garganta, o molestias en la nariz. Después, la persona comienza a estornudar, presenta secreción nasal excesiva (rinorrea) y se siente levemente enferma. La fiebre no es frecuente, pero puede aparecer al principio de la enfermedad, de carácter leve.",
    "causas": "Un virus del resfriado entra en el cuerpo a través de la boca, los ojos o la nariz. El virus puede propagarse a través de gotitas en el aire cuando alguien que está enfermo tose, estornuda o habla.\nTambién se propaga por contacto mano a mano con alguien que tiene un resfriado o al compartir objetos contaminados, como utensilios de comida, toallas, juguetes o teléfonos. Si te tocas los ojos, la nariz o la boca después de tal contacto, es probable que contraigas un resfriado.",
    "tratamiento": "Las personas con un resfriado deben permanecer calientes y cómodas y deben descansar. Deben tratar de evitar el contagio de la infección a otras personas quedándose en casa. Beber líquidos e inhalar vapores o nebulizaciones producidos por un vaporizador se ha considerado útil durante mucho tiempo para mantener las secreciones blandas y más fáciles de expulsar, pero probablemente no resulta de gran ayuda."
},{
    "id": "bronquitis",
    "nombre": "Bronquitis",
    "definicion": "La bronquitis es una inflamación del revestimiento de los bronquios que llevan el aire hacia adentro y fuera de los pulmones. Las personas que tienen bronquitis suelen toser mucosidad espesa y, tal vez, decolorada.", 
    "sintomas": "Los signos y síntomas de la bronquitis aguda y crónica pueden ser los siguientes:\n- Tos\n- Producción de mucosidad (esputo), que puede ser transparente, blanca, de color gris amarillento o verde —rara vez, puede presentar manchas de sangre—\n- Fatiga\n- Dificultad para respirar\n- Fiebre ligera y escalofríos\n- Molestia en el pecho\nSi tienes bronquitis aguda, es posible que tengas síntomas de resfrío, como dolores generalizados o dolores de cabeza leves y si tienes bronquitis crónica, es probable que tengas períodos en los que la tos u otros síntomas empeoran.",
    "causas": "Por lo general, la bronquitis aguda es causada por virus, generalmente los mismos virus que causan los resfríos y la gripe (influenza). Los antibióticos no matan los virus, por lo que este tipo de medicamentos no resulta útil en la mayoría de los casos de bronquitis.\nLa causa más frecuente de la bronquitis crónica es fumar cigarrillos. La contaminación del aire y el polvo o los gases tóxicos en el medio ambiente o en el lugar de trabajo también pueden contribuir al desarrollo de la enfermedad.",
    "tratamiento": "El tratamiento incluye descansar, tomar líquidos y aspirina (para adultos) o acetaminofén para bajar la fiebre. Un humidificador de ambientes puede ayudar. Puede necesitar inhalar medicinas para abrir sus vías respiratorias si tiene jadeo o sibilancias. Los antibióticos no le ayudarán si la causa es un virus."
},{
    "id": "cancer-pulmonar",
    "nombre": "Cancer Pulmonar",
    "definicion": "El cáncer es una enfermedad en la cual las células del cuerpo comienzan a multiplicarse sin control. El cáncer de pulmón es un cáncer que se forma en los tejidos del pulmón, generalmente en las células que recubren los conductos de aire. Es la principal causa de muerte por cáncer tanto en hombres como mujeres debido a que este se puede diseminar a los ganglios linfáticos o a otros órganos del cuerpo, como el cerebro.", 
    "sintomas": "En ocasiones, el cáncer de pulmón no causa ningún signo o síntoma. Se puede encontrar durante una radiografía de tórax realizada para otra afección.\n\n- Tos persistente o que empeora.\n- Dolor de pecho.\n- Dificultad para respirar.\n- Sibilancias.\n- Tos con sangre.\n- Sensación de cansancio todo el tiempo.\n- Pérdida de peso sin causa conocida.",
    "causas": "Fumar causa la mayoría de los cánceres de pulmón, tanto en fumadores como en personas expuestas al humo de segunda mano. Pero el cáncer de pulmón también ocurre en personas que nunca fumaron y en aquellas que nunca tuvieron una exposición prolongada al humo de segunda mano. En estos casos, es posible que no haya una causa clara de cáncer de pulmón.",
    "tratamiento": "Para la mayoría de los pacientes con cáncer de pulmón, los tratamientos actuales no curan el cáncer.\nSu tratamiento dependerá del tipo de cáncer de pulmón que tenga, hasta qué punto se ha propagado, su salud general y otros factores. Puede recibir más de un tipo de tratamiento.\nLos tratamientos para el cáncer de pulmón de células pequeñas incluyen:Cirugía, Quimioterapia, Radioterapia, Inmunoterapia, entre otros."
},{
    "id": "edema-pulmonar",
    "nombre": "Edema Pulmonar",
    "definicion": "El edema pulmonar es una enfermedad causada por un exceso de líquido en los pulmones. El líquido se acumula en las numerosas bolsas de aire de los pulmones y dificulta la respiración.", 
    "sintomas": "Los signos y síntomas del edema pulmonar pueden aparecer repentinamente o desarrollarse con el tiempo. Los signos y síntomas que presentas dependen del tipo de edema pulmonar.\n- Dificultad para respirar (disnea) o falta excesiva de aire que empeora con la actividad o al acostarse\n- Sensación de asfixia o ahogo que empeora al acostarte\n- Tos que produce esputo espumoso y que puede tener sangre\n- Silbido del pecho o jadeos al respirar\n- Piel fría y húmeda\n- Ansiedad, agitación o sensación de temor\n- Labios azulados\n- Latidos del corazón irregulares y rápidos (palpitaciones)",
    "causas": "Al respirar normalmente, los pequeños sacos de aire de los pulmones, los alvéolos, se llenan de aire. El oxígeno se absorbe y se expulsa dióxido de carbono. El edema pulmonar ocurre cuando los alvéolos tienen exceso de líquido.\n\nCuando los alvéolos tienen exceso de líquido, ocurren dos problemas:\n- El torrente sanguíneo no puede obtener suficiente oxígeno.\n- El cuerpo no puede eliminar el dióxido de carbono de manera adecuada.\nLas causas comunes incluyen:\n- neumonía\n- sepsis (infección de la sangre)\n- exposición a algunos químicos\n- falla de órganos que causa acumulación de líquido, insuficiencia cardíaca congestiva, insuficiencia renal o cirrosis hepática\n- ahogamiento incompleto\n- inflamación\n- trauma\n- reacción a ciertos medicamentos\n- sobredosis de droga",
    "tratamiento": "Para elevar los niveles de oxígeno en la sangre del paciente, se administra oxígeno a través de una mascarilla o unos pequeños tubos de plástico en la nariz. Se puede colocar un tubo de respiración en la tráquea si se requiere el uso de un ventilador o un respirador.\nSi las pruebas muestran que el edema pulmonar se debe a un problema en el sistema circulatorio, el paciente será tratado con medicamentos intravenosos para ayudar a eliminar el volumen de líquido y controlar la presión arterial."
},{
    "id": "enfisema",
    "nombre": "Enfisema",
    "definicion": "El enfisema es un tipo de enfermedad pulmonar obstructiva crónica (EPOC). La EPOC es un grupo de enfermedades pulmonares que dificultan la respiración y empeoran con el tiempo. \n\nEl enfisema afecta los alvéolos pulmonares. Normalmente, estos saquitos son elásticos o se estiran. Cuando inhala, cada saquito se llena de aire como un globo pequeño. Al exhalar, los saquitos se desinflan al salir el aire.", 
    "sintomas": "Es posible que en el comienzo no presente síntomas o sean solo leves. A medida que la enfermedad empeora, sus síntomas generalmente se vuelven más severos. Pueden incluir:\n- Tos frecuente o sibilancias\n- Tos que produce mucha mucosidad\n- Falta de aliento, especialmente si hace actividad física\n- Un silbido o chirrido cuando respira\n- Sensación de presión en el pecho\n\nAlgunas personas con enfisema contraen infecciones respiratorias frecuentes, como resfriados y gripe",
    "causas": "La causa principal del enfisema es la exposición prolongada a irritantes transmitidos por el aire, los que comprenden:\n- Humo de tabaco\n- Humo de marihuana\n- Contaminación atmosférica\n- Vapores químicos y polvo\n\nEl enfisema rara vez se produce a causa de un trastorno hereditario en una proteína que protege las estructuras elásticas de los pulmones.",
    "tratamiento": "No hay cura para el enfisema, pero el tratamiento puede ayudar con los síntomas, retrasar el progreso de la enfermedad y mejorar su capacidad de mantenerse activo."
}
];