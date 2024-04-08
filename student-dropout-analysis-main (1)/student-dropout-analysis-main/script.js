function change_tabs(evt,tabname){

    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("current-tab");
    }
    
    document.getElementById(tabname).style.display = "flex";
    evt.currentTarget.classList.add("current-tab");

    Array.from(document.querySelectorAll('.card')).forEach(card => {
        card.classList.add('reload');
        setTimeout(() => {
            card.classList.remove('reload');
        }, 10);
    });
}


// Get the dropdown button
const dropdownButton = document.getElementById('dropdownMenuButton');

const dropdownItems = document.querySelectorAll('.dropdown-item-states');

dropdownItems.forEach(item => {
    item.addEventListener('click', function() {
        dropdownButton.textContent = this.textContent;
        console.log( this.textContent);
        change_data(this.textContent.replaceAll("&","%26"));
    });
});


function change_data(state){
    fetch(`https://dropout-ratio-api-sobhanbose.koyeb.app/getData/byRegion?region=${state}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        update_cards(data);
    }
        
    )
}

function update_cards(data){
    enrprim = document.getElementById("enrprim");
    enrupprim = document.getElementById("enrupprim");
    enrsec = document.getElementById("enrsec");
    schlurban = document.getElementById("schlurban");
    schlrural = document.getElementById("schlrural");
    schloverall = document.getElementById("schloverall");
    litrate = document.getElementById("litrate");
    pci = document.getElementById("pci");
    lifegirl = document.getElementById("lifegirl");
    lifeboy = document.getElementById("lifeboy");
    teacprim = document.getElementById("teacprim");
    studprim = document.getElementById("studprim");
    ptrprim = document.getElementById("ptrprim");
    teacupprim = document.getElementById("teacupprim");
    studupprim = document.getElementById("studupprim");
    ptrupprim = document.getElementById("ptrupprim");
    teacsec = document.getElementById("teacsec");
    studsec = document.getElementById("studsec");
    ptrsec = document.getElementById("ptrsec");
    teacovl = document.getElementById("teacovl");
    studovl = document.getElementById("studovl");
    ptrovl = document.getElementById("ptrovl");
    gpiprim = document.getElementById("gpiprim");
    gpiupprim = document.getElementById("gpiupprim");
    gpisec = document.getElementById("gpisec");
    hdi = document.getElementById("hdi");
    dropgirlprim = document.getElementById("dropgirlprim");
    dropboyprim = document.getElementById("dropboyprim");
    dropovlprim = document.getElementById("dropovlprim");
    dropgirlupprim = document.getElementById("dropgirlupprim");
    dropboyupprim = document.getElementById("dropboyupprim");
    dropovlupprim = document.getElementById("dropovlupprim");
    dropgirlsec = document.getElementById("dropgirlsec");
    dropboysec = document.getElementById("dropboysec");
    dropovlsec = document.getElementById("dropovlsec");

    enrprim.textContent = data.enrol_rate_primary !== null ? `${data.enrol_rate_primary} %` : "Data Not Available";
    enrupprim.textContent = data.enrol_rate_upper_primary !== null ? `${data.enrol_rate_upper_primary} %` : "Data Not Available";
    enrsec.textContent = data.enrol_rate_secondary !== null ? `${data.enrol_rate_secondary} %` : "Data Not Available";
    schlurban.textContent = data.schools_urban !== null ? data.schools_urban : "Data Not Available";
    schlrural.textContent = data.schools_rural !== null ? data.schools_rural : "Data Not Available";
    schloverall.textContent = data.schools_total !== null ? data.schools_total : "Data Not Available";
    litrate.textContent = data.lit_rate !== null ? `${data.lit_rate} %` : "Data Not Available";
    pci.textContent = data.pci !== null ? data.pci : "Data Not Available";
    lifegirl.textContent = data.life_exp_girls !== null ? `${data.life_exp_girls} Years` : "Data Not Available";
    lifeboy.textContent = data.life_exp_boys !== null ? `${data.life_exp_boys} Years` : "Data Not Available";
    teacprim.textContent = data.num_teachers_primary !== null ? data.num_teachers_primary : "Data Not Available";
    studprim.textContent = data.num_students_primary !== null ? data.num_students_primary : "Data Not Available";
    ptrprim.textContent = data.ptr_primary !== null ? data.ptr_primary : "Data Not Available";
    teacupprim.textContent = data.num_teachers_upper_primary !== null ? data.num_teachers_upper_primary : "Data Not Available";
    studupprim.textContent = data.num_students_upper_primary !== null ? data.num_students_upper_primary : "Data Not Available";
    ptrupprim.textContent = data.ptr_upper_primary !== null ? data.ptr_upper_primary : "Data Not Available";
    teacsec.textContent = data.num_teachers_secondary !== null ? data.num_teachers_secondary : "Data Not Available";
    studsec.textContent = data.num_students_secondary !== null ? data.num_students_secondary : "Data Not Available";
    ptrsec.textContent = data.ptr_secondary !== null ? data.ptr_secondary : "Data Not Available";
    teacovl.textContent = data["No of teachers (overall)"] !== null ? data["No of teachers (overall)"] : "Data Not Available";
    studovl.textContent = data["No of students (overall)"] !== null ? data["No of students (overall)"] : "Data Not Available";
    ptrovl.textContent = data.ptr_overall !== null ? data.ptr_overall : "Data Not Available";
    gpiprim.textContent = data.gpi_primary !== null ? data.gpi_primary : "Data Not Available";
    gpiupprim.textContent = data.gpi_upper_primary !== null ? data.gpi_upper_primary : "Data Not Available";
    gpisec.textContent = data.gpi_secondary !== null ? data.gpi_secondary : "Data Not Available";
    hdi.textContent = data.hdi !== null ? data.hdi : "Data Not Available";
    dropgirlprim.textContent = data.dr_primary_girls !== null ? `${data.dr_primary_girls} %` : "Data Not Available";
    dropboyprim.textContent = data.dr_primary_boys !== null ? `${data.dr_primary_boys} %` : "Data Not Available";
    dropovlprim.textContent = data.dr_primary_overall !== null ? `${data.dr_primary_overall} %` : "Data Not Available";
    dropgirlupprim.textContent = data.dr_upper_primary_girls !== null ? `${data.dr_upper_primary_girls} %` : "Data Not Available";
    dropboyupprim.textContent = data.dr_upper_primary_boys !== null ? `${data.dr_upper_primary_boys} %` : "Data Not Available";
    dropovlupprim.textContent = data.dr_upper_primary_overall !== null ? `${data.dr_upper_primary_overall} %` : "Data Not Available";
    dropgirlsec.textContent = data.dr_secondary_girls !== null ? `${data.dr_secondary_girls} %` : "Data Not Available";
    dropboysec.textContent = data.dr_secondary_boys !== null ? `${data.dr_secondary_boys} %` : "Data Not Available";
    dropovlsec.textContent = data.dr_secondary_overall !== null ? `${data.dr_secondary_overall} %` : "Data Not Available";


    chart1_school.data.datasets[0].data = [data.elec*100, 100 - data.elec*100];
    chart1_school.update();

    chart2_school.data.datasets[0].data = [data.lib*100, 100 - data.lib*100];
    chart2_school.update();

    chart3_school.data.datasets[0].data = [data.water*100, 100 - data.water*100];
    chart3_school.update();

    chart4_school.data.datasets[0].data = [data.med*100, 100 - data.med*100];
    chart4_school.update();

    Array.from(document.querySelectorAll('.card')).forEach(card => {
        card.classList.add('reload');
        setTimeout(() => {
            card.classList.remove('reload');
        }, 300);
    });
}

change_data('Andaman & Nicobar Islands'.replaceAll("&","%26"));

var school_chart1 = document.getElementById('school-chart1').getContext('2d');

        
var chart1_school = new Chart(school_chart1, {
    type: 'doughnut', 
    data: {
        labels: ['Available %', 'Not Available %'],
  datasets: [{
    label: 'My Dataset',
    data: [12, 19],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(153, 102, 255)',
      'rgb(255, 159, 64)'
    ],
    // hoverOffset: 4
  }]
    },
    options: {
        responsive : false,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Schools With Electricity Connection',
                font: {
                    size: 18
                },
                align: 'start',
                color: '#091628'
            }
        }
    }
    
});

var school_chart2 = document.getElementById('school-chart2').getContext('2d');

      
var chart2_school = new Chart(school_chart2, {
    type: 'doughnut', 
    data: {
        labels: ['Available %', 'Not Available %'],
  datasets: [{
    label: 'My Dataset',
    data: [12, 19],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(153, 102, 255)',
      'rgb(255, 159, 64)'
    ],
    // hoverOffset: 4
  }]
    },
    options: {
        responsive : false,
        plugins: {
            title: {
                display: true,
                text: '           Schools With Library',
                font: {
                    size: 18
                },
                align: 'start',
                color: '#091628'
            }
        }
    }
    
});

var school_chart3 = document.getElementById('school-chart3').getContext('2d');

        
var chart3_school = new Chart(school_chart3, {
    type: 'doughnut', 
    data: {
        labels: ['Available %', 'Not Available %'],
  datasets: [{
    label: 'My Dataset',
    data: [12, 19],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(153, 102, 255)',
      'rgb(255, 159, 64)'
    ],
    // hoverOffset: 4
  }]
    },
    options: {
        responsive : false,
        plugins: {
            title: {
                display: true,
                text: '     Schools With Drinking Water',
                font: {
                    size: 18
                },
                align: 'start',
                color: '#091628'
            }
        }
    }
    
});

var school_chart4 = document.getElementById('school-chart4').getContext('2d');

        
var chart4_school = new Chart(school_chart4, {
    type: 'doughnut', 
    data: {
        labels: ['Available %', 'Not Available %'],
  datasets: [{
    label: 'My Dataset',
    data: [12, 19],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(153, 102, 255)',
      'rgb(255, 159, 64)'
    ],
    // hoverOffset: 4
  }]
    },
    options: {
        responsive : false,
        plugins: {
            title: {
                display: true,
                text: '   Schools With Medicinal Facility',
                font: {
                    size: 18
                },
                align: 'start',
                color: '#091628'
            }
        }
    }
    
});



