function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

angular.module('pbApp', [])
  .controller('ProjectListCtrl', function($scope, $sce) {
    $scope.projects = [
      {
        id: 1,
        name: 'Girasol empoderamiento solar',
        logoUrl: 'https://playbusiness.mx/system/campaigns/cover_images/000/000/871/medium/cover_PB.png',
        videoUrl: $sce.trustAsResourceUrl('https://www.youtube.com/embed/1Q1epmz_3Lg'),
        description: 'Primer crowdfunding solar en México. Energía solar al alcance y beneficio de todos. Conectamos residentes con instaladores e inversionistas.',
        totalCollected: 289400,
        daysLeft: 22,
        percShare: 10,
        bizValuation: 480800,
        followers: 62,
        investPeriod: 6,
        progress: 60,
        open: 0,
        monthlyInvest: 0,
        percExchange: '',
        totalInvest: '',
        following: true
      },
      {
        id: 2,
        name: 'Kaans',
        logoUrl: 'https://playbusiness.mx/system/campaigns/cover_images/000/000/653/medium/kaans.jpg',
        videoUrl: $sce.trustAsResourceUrl('https://www.youtube.com/embed/tvck0vEFX-Q'),
        description: 'Pasión por enseñar, por aprender, por compartir. Plataforma educativa 100% mexicana. Después de Kaans, la educación online no será lo mismo.',
        totalCollected: 12000,
        daysLeft: 21,
        percShare: 15,
        bizValuation: 642200,
        followers: 6,
        investPeriod: 5,
        progress: 1.8,
        open: 0,
        monthlyInvest: 0,
        percExchange: '',
        totalInvest: '',
        following: false
      }
    ];

    $scope.toggleInvest = function(project) {
      project.open = 1;
    };

    $scope.getInvestPerc = function(project) {
      if (project.monthlyInvest && project.monthlyInvest >= 100) {
        var totalInvest = project.monthlyInvest * project.investPeriod;
        var percExchange = (totalInvest / project.bizValuation) * project.percShare;
        project.percExchange = percExchange.toFixed(4);
        project.totalInvest = totalInvest;
      } else {
        project.percExchange = 0;
      }
    };

    $scope.like = function(project) {
      project.following = !project.following;
    }

  })

  .controller('ProjectCompleteListCtrl', function($scope, $sce) {
    $scope.projectsComplete = [
      {
        id: 1,
        name: 'Zago',
        logoUrl: 'https://playbusiness.mx/system/campaigns/cover_images/000/000/886/medium/LOGO.png',
        videoUrl: $sce.trustAsResourceUrl('https://www.youtube.com/embed/BiU47IIseh0'),
        description: 'En ZAGO podras COTIZAR los precios, menús completos y obtendras BENEFICIOS EXCLUSIVOS en los restaurantes de tu ciudad. ¡No mas imprevistos!',
        totalCollected: 223400,
        daysLeft: 0,
        percShare: 7,
        bizValuation: 223400,
        followers: 14,
        progress: 100,
        following: false
      },
      {
        id: 2,
        name: 'Play business 2.0',
        logoUrl: 'https://playbusiness.mx/system/campaigns/cover_images/000/001/023/medium/logo_780x440sceen-01.jpg',
        videoUrl: $sce.trustAsResourceUrl('https://www.youtube.com/embed/dTZBjXpBHMA'),
        description: 'La primera plataforma de equity crowdfunding en México donde cualquier persona puede invertir desde $100 en las Startups más "hot" de México',
        totalCollected: 5796600,
        daysLeft: 0,
        percShare: 6,
        bizValuation: 5796600,
        followers: 66,
        progress: 100,
        following: true
      }
    ];

    $scope.like = function(project) {
      project.following = !project.following;
    }
  });
