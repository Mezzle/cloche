module.exports = robot => {
  robot.log('Yay, the app was loaded!');

  robot.on('push', async context => {
    const { id: sha } = context.payload.head_commit;
    robot.log(`Received Payload for sha:${sha}`);

    context.github.repos.createStatus(
      context.repo({
        sha,
        state: 'success',
        target_url: 'https://cloche.mez.im',
        description: 'Cloche is covering your branch',
        context: 'cloche'
      })
    );
  });
};
