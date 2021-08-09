PennController.ResetPrefix(null); // Shorten command names (keep this line here)
var showProgressBar = true; 
// zeigt den Fortschrittsbalken
var progressBarText = "Fortschritt";
// Debugger aus? Oder nicht? Oder doch? Oder vielleicht auch nicht?  Oder doch? 
//DebugOff();
//Debugger ist ein Hilfswerkzeug, das beim Test moegliche Fehlerquellen
//im Skript identifiziert und Verbesserungsvorschlaege macht. 
//Im fertigen Experiment sollte das natuerlich ausgeschaltet sein. 

Sequence( "Intro", "Fullscreen",  "Info", "Einverständnis", "Angaben", "Einleitung", "Anweisungen Teil A" , 
randomize("Ex_A"), randomize("Trial_A"), "Anweisungen Teil B", randomize ("Ex_B"), randomize("Trial_B"), 
"Fragebogen", "Rueckmeldung", SendResults() , "Dank" );
//Legt die Reihenfolge fuer die einzelnen Sektionen des Experiments fest. 
//'randomize("Trial_A")' randomisiert die Versuchsfolien fuer jeden Durchgang neu 

Header( newText("")
);

newTrial("Intro", 
    newText("<h2>Bevor es losgeht...</h2> \
        <p>Dieses Experiment ist für die Teilnahme per Laptop oder Desktop-Computer konzipiert. Bitte nehmen Sie <b>nicht</b> über ein Smartphone oder Tablet an der Studie teil. </p>\
        <p>Bitte setzen Sie den Zoom Ihres Browsers auf die Voreinstellung (100%) und lassen Sie ihn während des Experiments unverändert. </p>\
        <p><b>Windows/Linux:</b> Drücken Sie [Strg]+[0] auf Ihrer Tastatur oder benutzen Sie [Strg]+[+] und [Strg]+[-] um den Zoom auf 100% zu setzen. </p>\
        <p><b>Mac OS X</b>: Benutzen Sie [⌘]+[+] und [⌘]+[-] um den Zoom auf 100% zu setzen. </p>\
        <p>Ihr Browser wird nun in den Vollbild-Modus wechseln. Bitte erteilen Sie Ihre Erlaubnis dafür.</p>")
        .center()
        .print()
    ,
    newButton("Weiter")
        .center()
        .print()
        .wait()
    ,
    newFunction( ()=> {
      if (document.documentElement.requestFullscreen)
        document.documentElement.requestFullscreen();
      else if (document.documentElement.mozRequestFullScreen) /* Firefox */
        document.documentElement.mozRequestFullScreen();
      else if (document.documentElement.webkitRequestFullscreen) /* Chrome, Safari, Opera */
        document.documentElement.webkitRequestFullscreen();
      else if (document.documentElement.msRequestFullscreen) /* IE/Edge */
        document.documentElement.msRequestFullscreen();
    })
    .call()
);

newTrial("Fullscreen", 
newText("<h2>Bevor es losgeht...</h2> \
    <p>Falls Ihr Browser nicht in den Vollbild-Modus gewechselt hat, tun Sie das jetzt bitte selbst: </p>\
    <p><b>Windows/Linux:</b> Drücken Sie [F11] auf Ihrer Tastatur um in den Vollbild-Modus zu wechseln. </p>\
    <p><b>Mac OS X</b>: Drücken Sie [Strg]+[⌘]+[F] auf Ihrer Tastatur um in den Vollbild-Modus zu wechseln.</p>")
        .center()
        .print()
    ,
    newButton("Weiter")
        .center()
        .print()
        .wait()
);

newTrial( "Einleitung" , //legt eine neue Experimentfolie mit dem Titel "Einleitung" an 
    defaultText.center().print()
    ,
    newText("Einleitung").css({"font-size": "24px", "font-weight": "bold"})
    ,
    newText("<p>Hallo und herzlich willkommen zu diesem linguistischen Experiment! \
    Bitte folgen Sie den Anweisungen auf den kommenden Folien.")
    ,
    newText("In diesem Experiment wird kreative Sprachproduktion untersucht. \
    Ihre Aufgabe besteht darin, Fortsetzungen zu kurzen Sätzen zu schreiben. \
    Die Aufgabe besteht aus zwei Teilen. Worum es im einzelnen geht, wird am Anfang des Blocks näher erklärt.<p>")
    ,
    newButton("Weiter")
        .center()
        .print()
        .wait()
)

.setOption("countsForProgressBar", false)
.setOption("hideProgressBar", true);

newTrial("Info" ,
    defaultText.center().print()
    ,
    newText("<h2>Information für Versuchspersonen</h2>")
    , 
    newText("Sehr geehrte Versuchspersonen, <br><br> \
    vielen Dank für Ihr Interesse an unserer wissenschaftlichen Studie. \
    Bitte lesen Sie sich die folgenden Informationen zunächst sorgfältig durch \
    und entscheiden Sie sich für Ihre Teilnahme oder auch Nicht-Teilnahme an dieser Studie. \
    Die Entscheidung, ob Sie an dieser Studie teilnehmen wollen oder nicht, steht Ihnen vollkommen frei. \
    Wenn Sie einverstanden sind, dann kreuzen Sie bitte das entsprechende Kästchen auf der nächsten Seite an.<br><br>")
    ,
    newText("<b>1. Problemstellung und Ziel des wissenschaftlichen Vorhabens</b><br>\
    In dieser Studie untersuchen wir, wie Menschen kreative Sprache produzieren.<br><br>\
    <b>2. Studienablauf</b><br>\
    Sie werden im Folgenden über den genauen Ablauf der Studie informiert. \
    Es handelt sich um einen computerbasierten Versuch. Wir werden Ihnen auf dem Bildschirm \
    verschiedene Stimuli präsentieren und bitten Sie, entsprechen der Anweisungen auf diese Stimuli zu reagieren.<br><br>\
    <b>3. Vorteile</b><br>\
    a) für Versuchspersonen: Sie bekommen einen Einblick in unsere Forschung. Bei Interesse klären wir Sie im Nachhinein gerne \
    über die genauen Absichten dieses Versuchs auf. Sie erhalten die über Prolific vereinbarte Aufwandsentschädigung. br>\
    b) für die Wissenschaft und die Öffentlichkeit: Erkenntnisse über kreative Sprachproduktion.<br><br>\
    <b>4. Risiken und Nebenwirkungen für Versuchspersonen</b><br>\
    Es bestehen keine Risiken und Nebenwirkungen.<br><br>\
    <b>5. Diskussion über Nutzen und Risiko</b><br>\
    Risiko: 0%; Nutzen: 100%<br><br>\
    <b>6. Verpflichtungen der Versuchspersonen</b><br>\
    Der Erfolg der Studie hängt maßgeblich von Ihrer Mitwirkung ab. Wir bitten Sie, während der gesamten Studie \
    konzentriert und entsprechend der Instruktionen mitzuarbeiten.<br><br>\
    <b>7. Versicherungsschutz / Erfordernisse für Versuchspersonen</b><br>\
    Nicht erforderlich.<br><br>\
    <b>8. Vertraulichkeit und Handhabung der Daten</b><br>\
    Die aufgezeichneten Daten werden anonymisiert gespeichert und vertraulich behandelt. \
    Für die Öffentlichkeit besteh keinerlei Möglichkeit, Ihre Daten zurückzuverfolgen.<br><br>\
    <b>9. Aufwandsentschädigung</b><br>\
    Wie über Prolific vereinbart gilt eine Aufwandsentschädigung von € 5,- für die Teilnahme.<br><br>\
    <b>10. Freiwilligkeit der Teilnahme</b><br>\
    Ihre Teilnahme an der Studie ist freiwillig. Durch die Nicht-Teilnahme an der Studie \
    entstehen Ihnen keinerlei Nachteile.<br><br>\
    <b>11. Möglichkeit des Studienabbruchs</b><br>\
    Sie können Ihre freiwillige Teilnahme an der Studie jederzeit und ohne Angabe\
    von Gründen abbrechen, ohne dass Ihnen daraus Nachteile entstehen. <br><br>\
    <b>12. Verantwortlicher Ansprechpartner während der Studie</b><br>\
    Aufgrund der technischen Umsetzung der Studie ist es nicht möglich, während der Studie \
    Kontakt mit der Versuchsleitung aufzunehmen.<br>")
    ,
    newButton("Weiter")
        .center()
        .print()
        .wait()
);
    
newTrial("Einverständnis" ,
    newText("<h2>Einverständniserklärung</h2>")
        .center()
        .print()
    ,
    newText("<p>Ich habe die \"Information für Versuchspersonen\" gelesen\
    und verstanden. Ich erkläre mich damit einverstanden, an der Studie teilzunehmen. \
    Meine Teilnahme erfolgt freiwillig. Ich weiß, dass ich die Möglichkeit habe, \
    jederzeit und ohne Angabe von Gründen abzubrechen, ohne dass mir daraus Nachteile entstehen.\
    Außerdem bin ich informiert worden, dass ich meine Daten zurückziehen kann.")
        .center()
        .print()
    ,
    newText("<p>Datenschutzklausel: <br>\
    Ich erkläre, dass ich mit der im Rahmen der Studie erfolgenden Aufzeichnung von \
    Studiendaten und ihrer Verwendung in pseudo- bzw. anonymisierter Form einverstanden bin.<br>")
        .center()
        .print()
    ,
    newText("Einverstanden", "Ja, ich bin einverstanden und möchte an der Studie teilnehmen.")
    ,
    newScale("Zustimmung", "Ja")
        .after(getText("Einverstanden"))
        .print()
    ,
    newText("Abbruch1", "<br>Falls Sie nicht an der Studie teilnehmen möchten, \
    verlassen Sie bitte den Vollbild-Modus mit der Taste [F11] (Windows/Linux) oder mit [Strg]+[⌘]+[F] (Mac OS X). <br> \
    Danach schließen Sie bitte einfach das Browserfenster oder den Browser-Tab.")
        .center()
        .print()
    ,
    newText("Abbruch2", "<p>Wenn Sie einverstanden sind und teilnehmen möchten, bitte kreuzen Sie das Kästchen weiter oben an \
    und klicken Sie dann auf den Knopf \"Weiter\".")
        .center()
        .print()
        .hidden()
    ,
    newButton("Weiter")
    .center()
    .print()
    .wait(
        getScale("Zustimmung")
        .test.selected("Ja")
            .failure(
                    getText("Abbruch1")
                        .hidden()
                    ,
                    getText("Abbruch2")
                        .hidden()
                    ,    
                    newTimer(100)
                        .start()
                        .wait()
                    ,
                    getText("Abbruch1").color("red").visible()
                    ,
                    getText("Abbruch2").visible()
                    )
    )
);

newTrial( "Angaben" , 
    newText("Ueberschrift", "<h2>Stichproben-relevante Angaben</h2>").center().print()
    ,
    newTextInput("inputAlter")
    .size("100px")
    ,
    newTextInput("inputGeschlecht")
    ,
    newScale("inputHaendigkeit", "linksh&auml;ndig", "rechtsh&auml;ndig", "keine Präferenz")
    .vertical()
    ,
    newTextInput("inputGeboren")
    ,
    newTextInput("inputWohnsitz")
    ,
    newScale("inputDeutsch", "ja", "nein")
    .vertical()
    ,
    newTextInput("inputMuttersprache")
    ,
    newTextInput("inputProlific-ID", "Pilotdurchlauf")
    ,
    newCanvas("Canvas", 600, 360)
        .add( 0,    0,  newText("Alter:").cssContainer("padding", "10px 0px 0px"))
        .add( 400,  0,  getTextInput("inputAlter").log())
        .add( 0,    40,  newText("Geschlecht:"))
        .add( 400,  40,  getTextInput("inputGeschlecht").log())
        .add( 0,    80,  newText("H&auml;ndigkeit:"))
        .add( 400,  80,  getScale("inputHaendigkeit").log())
        .add( 430,  78, newText("linksh&auml;ndig"))
        .add( 430,  98, newText("rechtsh&auml;ndig"))
        .add( 430,  118, newText("keine Pr&auml;ferenz"))
        .add( 0,    140,  newText("Geboren in (Bundesland/Staat):").cssContainer("padding", "10px 0px 0px"))
        .add( 400,  140,  getTextInput("inputGeboren").log())
        .add( 0,    180,  newText("Derzeitiger Wohnsitz (Bundesland/Staat):").cssContainer("padding", "10px 0px 0px"))
        .add( 400,  180,  getTextInput("inputWohnsitz").log())
        .add( 0,    220, newText("Deutsch als Muttersprache?"))
        .add( 400,  220, getScale("inputDeutsch").log())
        .add( 430,  218, newText("Ja"))
        .add( 430,  238, newText("Nein"))
        .add( 0,    280, newText("Muttersprachen (au&szlig;er Deutsch):").cssContainer("padding", "10px 0px 0px"))
        .add( 400,  280, getTextInput("inputMuttersprache").log())
        .add( 0,    320, newText("Prolific-ID:").cssContainer("padding", "10px 0px 0px"))
        .add( 400,  320, getTextInput("inputProlific-ID").log())
        .print()
    ,
    newText("Warnung1", "Bitte f&uuml;llen Sie die Pflichtangaben aus.")
        .color("red")
        .italic()
        .center()
        .hidden()
        .print()
    ,
    newButton("Weiter")
        .center()
        .print()
        .wait(
            getTextInput("inputAlter").test.text(/.+/)
            .and(getTextInput("inputGeboren").test.text(/.+/))
            .and(getTextInput("inputWohnsitz").test.text(/.+/))
            .and(getTextInput("inputProlific-ID").test.text(/.+/))
            .and(getTextInput("inputGeschlecht").test.text(/.+/))
            .and(getScale("inputHaendigkeit").test.selected())
            .and(getScale("inputDeutsch").test.selected())
                .failure(
                    getText("Warnung1")
                    .hidden()
                    ,
                    newTimer(100)
                    .start()
                    .wait()
                    ,
                    getText("Warnung1").visible() )
        )
    ,
    newVar("Alter")
        .global()
        .set( getTextInput("inputAlter") )
    ,
    newVar("Geboren")
        .global()
        .set( getTextInput("inputGeboren") )
    ,
    newVar("Wohnsitz")
        .global()
        .set( getTextInput("inputWohnsitz") )
    ,
    newVar("Muttersprache")
        .global()
        .set( getTextInput("inputMuttersprache") )
    ,
    newVar("Prolific-ID")
        .global()
        .set( getTextInput("inputProlific-ID") )
        ,
    newVar("Geschlecht")
        .global()
        .set( getTextInput("inputGeschlecht") )
    ,
    newVar("Haendigkeit")
        .global()
        .set( getScale("inputHaendigkeit") )
    ,
    newVar("Deutsch")
        .global()
        .set( getScale("inputDeutsch") )
)
    .log("Alter", getVar("Alter"))
    .log("Geschlecht", getVar("Geschlecht"))
    .log("Haendigkeit", getVar("Haendigkeit"))
    .log("Geboren", getVar("Geboren"))
    .log("Wohnsitz", getVar("Wohnsitz"))
    .log("Deutsch", getVar("Deutsch"))
    .log("Muttersprache", getVar("Muttersprache"))
    .log("Prolific-ID", getVar("Prolific-ID"))

.setOption("countsForProgressBar", false)
.setOption("hideProgressBar", true)

Template( GetTable("Anweisungen.csv")
        .setGroupColumn("List")
    ,
    row => newTrial( "Anweisungen Teil A" ,
        defaultText.center().print()
        ,
        newText("<h2>Anweisungen Teil A</h2>")
        ,
        newText("Sie bekommen gleich einen Satz zu sehen. Ihre Aufgabe ist es, \
        so schnell wie möglich einen <b>vollständigen neuen Satz</b> als <b>Fortsetzung</b> zu schreiben. <br>\
        Bitte lesen Sie den Satz, der auf dem Bildschirm erscheint, und schreiben Sie einen neuen Satz als Fortsetzung. <br>\
        Jeder Durchgang steht für sich alleine. Deine Fortsetzungen sollten sich nicht aufeinander beziehen. <br>\
        Nachdem Sie eine Fortsetzung eingegeben haben, bestätigen Sie bitte die Eingabe mit dem \"Weiter\"-Knopf \
        oder mit [Enter]. Dieser Block sollte nicht mehr als 10 Minuten dauern.<br>")
        ,
        newButton("Weiter").center().print().wait()
    )
    .setOption("countsForProgressBar", false)
    .setOption("hideProgressBar", true)
)
Template( GetTable("exercise.csv") 
        .setGroupColumn( "List" )
    ,
    row => newTrial( "Ex_A" , //Zeigt nacheinander fuer jede Zeile der angegebenen Tabelle eine Folie an 
        
        newKey("Enter", "Enter")
            .callback(
                getButton("Weiter").click()
                )
        ,
        newText("<h2>Teil A: Spontane Fortsetzung</h2>").center().print() //Zeigt Text im Format Heading 2 an. Umlaut per Html kodiert
        ,
        newText("Bitte schreiben Sie einen neuen Satz als Fortsetzung:").center().print()
        ,
        newText("Prompt", row.Prompt)
        .settings.css({
        "align": "center",
        "text-align": "center",
        "font-size": "large",
        "width": "100%"
        })
        .settings.cssContainer({
        "background-color": "lightgrey",
        "border-radius": "5px",
        //"margin": "auto",
        "align": "center",
        "padding": "5px",
        })
        .print()
        .log()
        ,
        newText("Line", "<hr>")
        .settings.css({
        "width": "100%",
        "margin": "auto",  
        })
        .print()
        ,
        newTextInput("Cont0", "")
        .lines(1)
        .center()
        .settings.css({
            "border": "solid 2px royalblue",
            "border-radius": "5px",
            "width": "100%",
            //"height": "80px",
            "align": "center",
            "text-align": "left",
            //"padding": "10px 5px 0px 5px",
            "font-size": "large",
            "margin": "auto"
        })
        .print()
        ,
        newText("Line", "<hr>")
        .settings.css({
        "width": "100%",
        "margin": "auto",  
        })
        .print()
        ,
        newText("Warnung2", "Bitte gib eine Fortsetzung ein.")
        .color("red")
        .italic()
        .center()
        .hidden()
        .print()
        ,
        newButton("Weiter")
        .center()
        .print()
        .wait( getTextInput("Cont0").testNot.text("")
            .failure( 
                getText("Warnung2")
                .hidden()
                ,
                newTimer(100)
                .start()
                .wait()
                ,
                getText("Warnung2").visible() ) 
        )
    )
    //.setOption("countsForProgressBar", false)
    //.setOption("hideProgressBar", true)
)
Template( GetTable("master_pilot.csv") 
            .filter( row => row.Item = "non-creative" )
        .setGroupColumn( "List" )
    ,
    row => newTrial( "Trial_A" , //Zeigt nacheinander fuer jede Zeile der angegebenen Tabelle eine Folie an 
        
        newKey("Enter", "Enter")
            .callback(
                getButton("Weiter").click()
                )
        ,
        newText("<h2>Teil A: Spontane Fortsetzung</h2>").center().print() //Zeigt Text im Format Heading 2 an. Umlaut per Html kodiert
        ,
        newText("Bitte schreiben Sie einen neuen Satz als Fortsetzung:").center().print()
        ,
        newText("Prompt", row.Prompt)
        .settings.css({
        "align": "center",
        "text-align": "center",
        "font-size": "large",
        "width": "100%"
        })
        .settings.cssContainer({
        "background-color": "lightgrey",
        "border-radius": "5px",
        //"margin": "auto",
        "align": "center",
        "padding": "5px",
        })
        .print()
        .log()
        ,
        newText("Line", "<hr>")
        .settings.css({
        "width": "100%",
        "margin": "auto",  
        })
        .print()
        ,
        newTextInput("Cont1", "")
        .lines(1)
        .center()
        .settings.css({
            "border": "solid 2px royalblue",
            "border-radius": "5px",
            "width": "100%",
            //"height": "80px",
            "align": "center",
            "text-align": "left",
            //"padding": "10px 5px 0px 5px",
            "font-size": "large",
            "margin": "auto"
        })
        .print()
        .log()
        ,
        newText("Line", "<hr>")
        .settings.css({
        "width": "100%",
        "margin": "auto",  
        })
        .print()
        ,
        newText("Warnung2", "Bitte gib eine Fortsetzung ein.")
        .color("red")
        .italic()
        .center()
        .hidden()
        .print()
        ,
        newButton("Weiter")
        .center()
        .print()
        .wait( getTextInput("Cont1").testNot.text("")
            .failure( 
                getText("Warnung2")
                .hidden()
                ,
                newTimer(100)
                .start()
                .wait()
                ,
                getText("Warnung2").visible() ) 
        )
    )
    //.setOption("countsForProgressBar", false)
    //.setOption("hideProgressBar", true)
    .log("Cont1")
    //"Verb No.","Item","Verb","GenderNP1","GenderNP2","Block","Condition","List","Connective","Prompt"
    .log("VerbNo", row.VerbNo)
    .log("Item", row.Item)
    .log("Verb", row.Verb)    
    .log("GenderNP1", row.GenderNP1)
    .log("GenderNP2", row.GenderNP2)
    .log("Block", row.Block)    
    .log("Condition", row.Condition)
    .log("List", row.List)    
    .log("Connective", row.Connective)
    .log("Prompt", row.Prompt)
)

newTrial( "Anweisungen Teil B" ,
    defaultText.print()
,
newText("<h2>Anweisungen Teil B</h2>")
,
newText("Die erste Hälfte des Experiments ist geschafft! Gleich geht es weiter mit den kreativen Fortsetzungen. \
Schreiben Sie auch in diesem Teil bitte eine Fortsetzung für den angezeigten Satz. <br>\
Diesmal möchten wir Sie allerdings bitten, sich eine möglichst <b><span style=\"color:red;\">kreative</span></b> \
Fortsetzung auszudenken. Diese Fortsetzung sollte einerseits <b><span style=\"color:red;\">originell</span></b> sein. \
Zugleich sollte sie aber auch so geschrieben sein, dass ein:e potenzielle Leser:in sie als \
<b><span style=\"color:red;\">gelungen</span></b> und verständlich bezeichnen würde.<br> \
Sie dürfen den eingegebenen Text gerne überarbeiten, korrigieren oder ersetzen, falls Ihnen etwas besseres einfällt. \
Lassen Sie sich dafür so viel Zeit, wie Sie wollen. Sie können jederzeit eine Pause machen. <br>")
,
newButton("Weiter").center().print().wait()
)
.setOption("countsForProgressBar", false)
//.setOption("hideProgressBar", true);
Template( GetTable("exercise.csv") 
        .setGroupColumn( "List" )
    ,
    row => newTrial( "Ex_B", 
        newKey("Enter", "Enter")
            .callback(
                getButton("Weiter").click()
                )
        ,
        newText("<h2>Teil B: Kreative Fortsetzung</h2>").center().print() //Zeigt Text im Format Heading 2 an. Umlaut per Html kodiert
        ,
        newText("Bitte schreiben Sie einen neuen Satz als Fortsetzung:").center().print()
        ,
        newText("Prompt", row.Prompt)
        .settings.css({
        "align": "center",
        "text-align": "center",
        "font-size": "large",
        "width": "100%"
        })
        .settings.cssContainer({
        "background-color": "lightgrey",
        "border-radius": "5px",
        //"margin": "auto",
        "align": "center",
        "padding": "5px",
        })
        .print()
        .log()
        ,
        newText("Line", "<hr>")
        .settings.css({
        "width": "100%",
        "margin": "auto",  
        })
        .print()
        ,
        newTextInput("Cont0", "")
        .lines(1)
        .center()
        .settings.css({
            "border": "solid 2px royalblue",
            "border-radius": "5px",
            "width": "75%",
            //"height": "80px",
            "align": "center",
            "text-align": "left",
            //"padding": "10px 5px 0px 5px",
            "font-size": "large",
            "margin": "auto"
        })
        .print()
        .log()
        ,
        newText("Line", "<hr>")
        .settings.css({
        "width": "100%",
        "margin": "auto",  
        })
        .print()
        ,
        newText("Warnung3", "Bitte gib eine Fortsetzung ein.")
        .color("red")
        .italic()
        .center()
        .hidden()
        .print()
        ,
        newText(" ").center().print()
        ,
        newButton("Weiter")
            .center()
            .print()
            .wait(
                getTextInput("Cont0").testNot.text("")
                .failure( 
                    getText("Warnung3")
                    .hidden()
                    ,
                    newTimer(100)
                    .start()
                    .wait()
                    ,
                    getText("Warnung3").visible()
                )
            )
        )
);
Template( GetTable("master_pilot.csv") 
            .filter( row => row.Block = "creative" )    ,
    row => newTrial( "Trial_B", 
        newKey("Enter", "Enter")
            .callback(
                getButton("Weiter").click()
                )
        ,
        newText("<h2>Teil B: Kreative Fortsetzung</h2>").center().print() //Zeigt Text im Format Heading 2 an. Umlaut per Html kodiert
        ,
        newText("Bitte schreiben Sie einen neuen Satz als Fortsetzung:").center().print()
        ,
        newText("Prompt", row.Prompt)
        .settings.css({
        "align": "center",
        "text-align": "center",
        "font-size": "large",
        "width": "100%"
        })
        .settings.cssContainer({
        "background-color": "lightgrey",
        "border-radius": "5px",
        //"margin": "auto",
        "align": "center",
        "padding": "5px",
        })
        .print()
        .log()
        ,
        newText("Line", "<hr>")
        .settings.css({
        "width": "100%",
        "margin": "auto",  
        })
        .print()
        ,
        newTextInput("Cont2", "")
        .lines(1)
        .center()
        .settings.css({
            "border": "solid 2px royalblue",
            "border-radius": "5px",
            "width": "75%",
            //"height": "80px",
            "align": "center",
            "text-align": "left",
            //"padding": "10px 5px 0px 5px",
            "font-size": "large",
            "margin": "auto"
        })
        .print()
        .log()
        ,
        newText("Line", "<hr>")
        .settings.css({
        "width": "100%",
        "margin": "auto",  
        })
        .print()
        ,
        newText("Warnung3", "Bitte gib eine Fortsetzung ein.")
        .color("red")
        .italic()
        .center()
        .hidden()
        .print()
        ,
        newText(" ").center().print()
        ,
        newButton("Weiter")
            .center()
            .print()
            .wait(
                getTextInput("Cont2").testNot.text("")
                .failure( 
                    getText("Warnung3")
                    .hidden()
                    ,
                    newTimer(100)
                    .start()
                    .wait()
                    ,
                    getText("Warnung3").visible()
                )
            )
        )
    .log("Cont2")
    .log("VerbNo", row.VerbNo)
    .log("Item", row.Item)
    .log("Verb", row.Verb)    
    .log("GenderNP1", row.GenderNP1)
    .log("GenderNP2", row.GenderNP2)
    .log("Block", row.Block)    
    .log("Condition", row.Condition)
    .log("List", row.List)    
    .log("Connective", row.Connective)
    .log("Prompt", row.Prompt)
)

newTrial ("Fragebogen" ,
    newText("<h2>Fragebogen</h2> \
    <p>Bitte beantworten Sie an dieser Stelle ein paar Fragen zu Ihrer Persönlichkeit.</p>")
        .center()
        .print()
    ,
    newCanvas("FragebogenCanvas", 600, 400)
        .add( 0, 0, newText("Gray Lines1", " ").settings.cssContainer({
        "width": "520",
        "background-color": "lightgrey",
        "border-radius": "5px",
        "padding": "7px"
        }))
        .add( 0, 80, newText("Gray Lines2", " ").settings.cssContainer({
        "width": "520",
        "background-color": "lightgrey",
        "border-radius": "5px",
        "padding": "7px"
        }))
        .add( 0, 160, newText("Gray Lines3", " ").settings.cssContainer({
        "width": "520",
        "background-color": "lightgrey",
        "border-radius": "5px",
        "padding": "7px"
        }))
        .add( 0, 240, newText("Gray Lines4", " ").settings.cssContainer({
        "width": "520",
        "background-color": "lightgrey",
        "border-radius": "5px",
        "padding": "7px"
        }))
        .add( 10, 0, newText("Ich habe keine große Vorstellungskraft."))
        .add( 400, 0, newScale("Antwort1", 5).log())
        .add( 5, 40, newText("Ich liebe es, etwas herausforderndes zu lesen."))
        .add(400, 40, newScale("Antwort2", 5).log())
        .add( 5, 80, newText("Ich bin an vielen verschiedenen Dingen interessiert."))
        .add(400, 80, newScale("Antwort3", 5).log())
        .add( 5, 120, newText("Ich versuche, mich selbst zu verstehen."))
        .add(400, 120, newScale("Antwort4", 5).log())
        .add( 5, 160, newText("Ich bin nicht an abstrakten Ideen interessiert."))
        .add(400, 160, newScale("Antwort5", 5).log())
        .add( 5, 200, newText("Ich glaube an die Wichtigkeit von Kunst."))
        .add(400, 200, newScale("Antwort6", 5).log())
        .add( 5, 240, newText("Ich halte mich lieber an das, das mir vertraut ist."))
        .add(400, 240, newScale("Antwort7", 5).log())
        .add( 5, 280, newText("Ich wähle meistens eher konservative Kandidat:innen."))
        .add(400, 280, newScale("Antwort8", 5).log())
        .print()
    ,
    newButton("Weiter")
        .print()
        .wait()
)


newTrial( "Rueckmeldung" ,
    newText("<p>Feedback").css({"font-size": "24px", "font-weight": "bold"}).print()
    ,
    newText("Der Hauptteil des Experiments ist geschafft. Danke für Deine Teilnahme.").print()
    ,
    newText("An dieser Stelle möchten wir Dich um eine Rückmeldung zum Experiment bitten.").print()
    , 
    newText("<p>Wie leicht ist Dir die Aufgabe gefallen?").print()
    ,
    newScale("leicht", 100)
        .slider()
        .before(newText("Sehr leicht"))
        .after(newText("Sehr schwierig"))
        .labelsPosition("bottom")
        .print()
        .log()
    ,
    newText("<p>Wie kreativ waren Deine Fortsetzungen in Block A des Experiments?").print()
    ,
    newScale("kreativ_A", 100)
        .slider()
        .labelsPosition("bottom")
        .before(newText("sehr unkreativ"))
        .after(newText("sehr kreativ"))
        .print()
        .log()
    ,
    newText("<p>Wie kreativ waren Deine Fortsetzungen in Block B des Experiments?").print()
    ,
    newScale("kreativ_B", 100)
        .slider()
        .labelsPosition("bottom")
        .before(newText("sehr unkreativ"))
        .after(newText("sehr kreativ"))
        .print()
        .log()
    ,
    newText("<p>Welche Strategien hast Du in Teil B für besonders kreative Fortsetzungen angewendet?").print()
    ,
    newTextInput("Strategie")
        .print()
    ,
    newText("<p>Hast Du Kommentare zu dem Experiment oder anderes Feedback?").print()
    ,
    newTextInput("Feedback")
        .print()
    ,
    newText("Warnung5", "Bitte fülle die Pflichtangaben aus.")
        .color("red")
        .italic()
        .center()
        .hidden()
        .print()
    ,
    newButton("Fertig") 
        .center()
        .print()
        .wait(
            //getTextInput("Feedback").test.text(/.+/)
            //.and(getTextInput("Strategie").test.text(/.+/))
            getScale("leicht").test.selected()
            .and(getScale("kreativ_A").test.selected())
            .and(getScale("kreativ_B").test.selected())
                .failure( 
                    getText("Warnung5")
                    .hidden()
                    ,
                    newTimer(100)
                    .start()
                    .wait()
                    ,
                    getText("Warnung5").visible() )
            )
)

Template( GetTable( "links.csv" ) 
        .setGroupColumn( "List" )
        ,
    row => newTrial( "Dank" ,
        newFunction( ()=> {
            if (document.exitFullscreen)
                document.exitFullscreen();
            else if (document.mozCancelFullScreen) /* Firefox */
                document.mozCancelFullScreen();
            else if (document.webkitExitFullscreen) /* Chrome, Safari and Opera */
                document.webkitExitFullscreen();
            else if (document.msExitFullscreen) /* IE/Edge */
                document.msExitFullscreen();
        }).call() //Verlaesst Vollbild-Modus des Browsers
        ,

    newText("<h2>Fertig</h2>")
        .center()
        .print()
    ,
    newText("<p>Das Experiment ist nun vorüber. Vielen Dank für Ihre Teilnahme!\
    Um zu <b>Prolific</b> zurückzukehren, klicken Sie bitte auf diesen Link: ")
        .center()
        .print()
    ,
    newText("Link", row.Link)
        .center()
        .print()
    ,
    newButton("void")
        .wait()
    //Trick: Eine Schaltflaeche wird erstellt, aber nie angezeigt (via print()-Befehl)
    //sodass unendlich lange auf den Knopfdruck gewartet wird. Das stellt sicher, dass 
    //VPn auf diesem Trial-Bildschirm bleiben. 
    )
    .setOption("countsForProgressBar", false)

)
;